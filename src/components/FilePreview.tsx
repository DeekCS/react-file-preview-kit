import React from 'react';
import { formatFileSize } from '../utils/helpers';
import FileIcon from './FileIcon';

// Type definitions
export interface FileInfo {
  name: string;
  size: number;
  type: string;
  content?: ArrayBuffer; // ArrayBuffer containing the file data
  lastModified?: number; // Optional timestamp
}

export type ScrollDirection = 'horizontal' | 'vertical' | 'none';

export interface FilePreviewProps {
  /**
   * File(s) to display - can be a single file or an array of files
   */
  files: FileInfo | FileInfo[];

  /**
   * Callback when view button is clicked
   * If not provided, a default implementation will be used that opens the file in a new tab
   * @param file The file that was clicked
   * @param index The index of the file in the array (if multiple files)
   */
  onView?: (file: FileInfo, index: number) => void;

  /**
   * Callback when delete button is clicked
   * @param file The file that was clicked
   * @param index The index of the file in the array (if multiple files)
   */
  onDelete?: (file: FileInfo, index: number) => void;

  /**
   * Whether to show the view button
   * @default true
   */
  showViewButton?: boolean;

  /**
   * Whether to show the delete button
   * @default true
   */
  showDeleteButton?: boolean;

  /**
   * Direction of scroll when content overflows
   * @default 'vertical'
   */
  scrollDirection?: ScrollDirection;

  /**
   * Maximum height for vertical scroll (in pixels)
   * @default 200
   */
  maxHeight?: number;

  /**
   * Maximum width for horizontal scroll (in pixels)
   * @default 600
   */
  maxWidth?: number;

  /**
   * Custom container class name for additional styling
   */
  containerClassName?: string;
}

/**
 * Opens a file in a new tab using the file's content
 * @param file The file to open
 */
const openFileInNewTab = (file: FileInfo): void => {
  if (!file.content) {
    console.warn('File content not available for preview:', file.name);
    return;
  }

  try {
    // Create a Blob from the ArrayBuffer content
    const blob = new Blob([file.content], { type: file.type });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Open the URL in a new tab
    window.open(url, '_blank');

    // Clean up the URL object after opening the tab
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error('Error opening file:', error);
  }
};

/**
 * Truncates a file name while preserving the extension
 * @param fileName The file name to truncate
 * @param maxLength Maximum length of the displayed name (default: 20)
 * @returns Truncated file name with extension preserved
 */
const truncateFileName = (fileName: string, maxLength: number = 20): string => {
  if (fileName.length <= maxLength) return fileName;

  const lastDotIndex = fileName.lastIndexOf('.');
  const extension = lastDotIndex !== -1 ? fileName.substring(lastDotIndex) : '';
  const nameWithoutExt = lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;

  // Calculate how much space we have for the name part
  const availableLength = maxLength - extension.length - 3; // 3 for "..."

  if (availableLength <= 0) {
    return fileName.substring(0, maxLength - 3) + '...';
  }

  return nameWithoutExt.substring(0, availableLength) + '...' + extension;
};

/**
 * Single file preview component with responsive design using Tailwind
 * Following the 8-point grid system
 */
const SingleFilePreview: React.FC<{
  file: FileInfo;
  onView?: (file: FileInfo) => void;
  onDelete?: (file: FileInfo) => void;
  showViewButton?: boolean;
  showDeleteButton?: boolean;
  isHorizontal?: boolean;
}> = ({
  file,
  onView,
  onDelete,
  showViewButton = true,
  showDeleteButton = true,
  isHorizontal = false,
}) => {
  // Default view handler that uses the shared openFileInNewTab function
  const handleViewClick = () => {
    if (onView) {
      onView(file);
    } else {
      openFileInNewTab(file);
    }
  };

  return (
    <div
      className={`flex items-center p-4 gap-6 bg-white ${
        isHorizontal ? 'min-w-[300px] flex-shrink-0' : 'w-[350px] '
      }`}
      style={{
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.08)',
        borderRadius: '0.75rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(148, 163, 184, 0.80)',
      }}
    >
      <FileIcon size="sm" className="min-w-fit" fileType={file.type} />

      <div className="flex-grow">
        <bdi
          className="text-blue-dark-primary block font-semibold text-xs md:text-sm 
          rtl:text-right"
          title={file.name}
        >
          {truncateFileName(file.name, 20)}
        </bdi>
        {file.size > 0 && (
          <div className="text-[#4B5563] text-xs font-normal md:leading-5">
            {formatFileSize(file.size)}
          </div>
        )}
      </div>

      <div className="flex items-start gap-2">
        {showViewButton && (
          <button
            type="button"
            onClick={handleViewClick}
            className="flex p-2 items-center rounded-lg bg-[rgba(83,83,83,0.08)] border-none cursor-pointer hover:bg-[rgba(83,83,83,0.12)] transition-colors"
            aria-label="View file"
          >
            <div className="flex w-5 h-5 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M16.9526 5.94569C17.206 6.30096 17.3327 6.47859 17.3327 6.74154C17.3327 7.00448 17.206 7.18212 16.9527 7.53738C15.8143 9.13367 12.907 12.5749 8.99935 12.5749C5.09167 12.5749 2.18443 9.13367 1.04605 7.53738C0.792694 7.18212 0.666016 7.00448 0.666016 6.74154C0.666016 6.47859 0.792693 6.30096 1.04605 5.94569C2.18443 4.3494 5.09166 0.908203 8.99935 0.908203C12.907 0.908203 15.8143 4.3494 16.9526 5.94569Z"
                  stroke="#202D61"
                />
                <path
                  d="M11.5 6.74219C11.5 5.36148 10.3807 4.24219 9 4.24219C7.61929 4.24219 6.5 5.36148 6.5 6.74219C6.5 8.1229 7.61929 9.24219 9 9.24219C10.3807 9.24219 11.5 8.1229 11.5 6.74219Z"
                  stroke="#202D61"
                />
              </svg>
            </div>
          </button>
        )}

        {showDeleteButton && (
          <button
            type="button"
            onClick={(e) => {
              onDelete && onDelete(file);
              e.stopPropagation();
            }}
            className="flex p-2 items-center rounded-lg bg-[rgba(83,83,83,0.08)] border-none cursor-pointer hover:bg-[rgba(239,68,68,0.12)] transition-colors"
            aria-label="Delete file"
          >
            <div className="flex w-5 h-5 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
              >
                <path
                  d="M14.25 4.32422L13.7336 12.6785C13.6016 14.8129 13.5356 15.8802 13.0006 16.6474C12.7361 17.0268 12.3955 17.347 12.0006 17.5876C11.2018 18.0742 10.1325 18.0742 7.99395 18.0742C5.8526 18.0742 4.78192 18.0742 3.98254 17.5867C3.58733 17.3456 3.24666 17.0249 2.98224 16.6449C2.4474 15.8764 2.38288 14.8076 2.25384 12.6702L1.75 4.32422"
                  stroke="#EC6D62"
                  strokeLinecap="round"
                />
                <path
                  d="M0.5 4.32487H15.5M11.3798 4.32487L10.8109 3.15131C10.433 2.37175 10.244 1.98197 9.91809 1.73887C9.8458 1.68495 9.76924 1.63699 9.68919 1.59545C9.32826 1.4082 8.8951 1.4082 8.02877 1.4082C7.14069 1.4082 6.69665 1.4082 6.32974 1.6033C6.24842 1.64654 6.17082 1.69645 6.09774 1.75251C5.76803 2.00545 5.58386 2.4095 5.2155 3.21758L4.71077 4.32487"
                  stroke="#EC6D62"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Generates container styles based on scroll direction and dimensions
 * @param scrollDirection Direction of scroll
 * @param maxHeight Maximum height for vertical scroll
 * @param maxWidth Maximum width for horizontal scroll
 * @returns CSS styles object
 */
const getContainerStyles = (
  scrollDirection: ScrollDirection,
  maxHeight: number,
  maxWidth: number,
): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {};

  if (scrollDirection === 'vertical') {
    baseStyles.maxHeight = `${maxHeight}px`;
  } else if (scrollDirection === 'none') {
  } else {
    baseStyles.maxWidth = `${maxWidth}px`;
  }

  return baseStyles;
};

/**
 * Generates container class names based on scroll direction
 * @param scrollDirection Direction of scroll
 * @param containerClassName Additional custom class names
 * @returns Combined class name string
 */
const getContainerClassNames = (
  scrollDirection: ScrollDirection,
  containerClassName?: string,
): string => {
  const baseClasses = 'flex gap-3 p-2';

  const scrollClasses =
    scrollDirection === 'vertical'
      ? 'flex-col overflow-y-auto'
      : scrollDirection === 'none'
        ? 'flex-row max-w-full'
        : 'flex-row overflow-x-auto';

  const allClasses = [baseClasses, scrollClasses, containerClassName]
    .filter(Boolean)
    .join(' ');

  return allClasses;
};

/**
 * Responsive FilePreview component using Tailwind CSS
 * Follows the 8-point grid system with proper spacing
 * Supports both horizontal and vertical scrolling
 */
const FilePreview: React.FC<FilePreviewProps> = ({
  files,
  onView,
  onDelete,
  showViewButton = true,
  showDeleteButton = true,
  scrollDirection = 'vertical',
  maxHeight = 200,
  maxWidth = 600,
  containerClassName,
}) => {
  // Handler for view button click - uses provided handler or defaults to openFileInNewTab
  const handleView = (file: FileInfo, index: number) => {
    if (onView) {
      onView(file, index);
    } else {
      openFileInNewTab(file);
    }
  };

  // Handler for delete button click
  const handleDelete = (file: FileInfo, index: number) => {
    if (onDelete) {
      onDelete(file, index);
    }
  };

  // If files is a single file object, wrap it in an array
  const fileArray = Array.isArray(files) ? files : [files];

  // Generate container styles and class names
  const containerStyles = getContainerStyles(
    scrollDirection,
    maxHeight,
    maxWidth,
  );
  const containerClasses = getContainerClassNames(
    scrollDirection,
    containerClassName,
  );

  return (
    <div className={containerClasses} style={containerStyles}>
      {/* Map through the files and render SingleFilePreview for each */}
      {fileArray.map((file, index) => (
        <SingleFilePreview
          key={`${file.name}-${file.size}-${file.lastModified || index}`}
          file={file}
          onView={() => handleView(file, index)}
          onDelete={() => handleDelete(file, index)}
          showViewButton={showViewButton}
          showDeleteButton={showDeleteButton}
          isHorizontal={scrollDirection === 'horizontal'}
        />
      ))}
    </div>
  );
};

export default FilePreview;
