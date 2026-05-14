import { default as React } from 'react';

export interface FileInfo {
    name: string;
    size: number;
    type: string;
    content?: ArrayBuffer;
    lastModified?: number;
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
 * Responsive FilePreview component using Tailwind CSS
 * Follows the 8-point grid system with proper spacing
 * Supports both horizontal and vertical scrolling
 */
declare const FilePreview: React.FC<FilePreviewProps>;
export default FilePreview;
