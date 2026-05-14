import { default as React } from 'react';
import { IconVariant } from '../icons/document-icons';

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
    customSize?: number | {
        width: number;
        height: number;
    };
}
declare const FileIcon: React.FC<FileIconProps>;
export default FileIcon;
export type { FileIconProps };
export type { IconVariant as FileIconVariant };
