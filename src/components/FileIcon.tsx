import React, { memo, useMemo } from 'react';
import { getFileIcon } from '../icons/file-icon-registry';
import type { IconVariant } from '../icons/document-icons';

interface FileIconProps {
  fileType: string;
  /** Display variant — default (outlined + colored badge), gray, or solid (filled) */
  variant?: IconVariant;
  /** Custom CSS classes for additional styling */
  className?: string;
  /** Size variant for responsive design */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /**
   * Fixed size in pixels when size is 'custom'.
   * Can be a number (applies to both width and height) or object with separate values.
   */
  customSize?: number | { width: number; height: number };
}

const SIZE_CLASSES = {
  xs: 'w-6 h-6 sm:w-8 sm:h-8',
  sm: 'w-20 h-10 sm:w-10 sm:h-10',
  md: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16',
  lg: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
  xl: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28',
  custom: '',
} as const;

const FileIcon: React.FC<FileIconProps> = memo(
  ({
    fileType,
    variant = 'default',
    className = '',
    size = 'sm',
    ariaLabel,
    customSize = 64,
  }) => {
    const Icon = useMemo(() => getFileIcon(fileType ?? ''), [fileType]);

    const finalClassName = useMemo(() => {
      const sizeClass = size === 'custom' ? '' : SIZE_CLASSES[size];
      return `${sizeClass} ${className}`.trim();
    }, [size, className]);

    const inlineStyle = useMemo((): React.CSSProperties | undefined => {
      if (size !== 'custom') return undefined;
      const sizeValue =
        typeof customSize === 'number'
          ? { width: customSize, height: customSize }
          : customSize;
      return { width: `${sizeValue.width}px`, height: `${sizeValue.height}px` };
    }, [size, customSize]);

    return (
      <span role="img" aria-label={ariaLabel ?? `${fileType} file icon`}>
        <Icon variant={variant} className={finalClassName} style={inlineStyle} />
      </span>
    );
  },
);

FileIcon.displayName = 'FileIcon';

export default FileIcon;
export type { FileIconProps };
export type { IconVariant as FileIconVariant };

