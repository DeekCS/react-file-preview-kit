import { default as React } from 'react';
import { IconVariantProps, PdfIcon, DocIcon, DocxIcon, XlsIcon, XlsxIcon, CsvIcon, PptIcon, PptxIcon, TxtIcon } from './document-icons';
import { PngIcon, JpgIcon, JpegIcon, GifIcon, SvgIcon, WebPIcon, TiffIcon, EpsIcon, ImgIcon } from './image-icons';
import { Mp4Icon, Mp3Icon, AviIcon, MkvIcon, MpegIcon, WavIcon } from './media-icons';
import { ZipIcon, RarIcon } from './archive-icons';
import { PsdIcon, AiIcon, FigIcon, InddIcon, AepIcon } from './design-icons';
import { JsIcon, JsonIcon, HtmlIcon, CssIcon, XmlIcon, SqlIcon, JavaIcon, RssIcon, ExeIcon, DmgIcon } from './development-icons';

export type { IconVariantProps };
export declare const GenericFileIcon: {
    ({ className, style }: Omit<IconVariantProps, "variant">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
type IconComponent = React.FC<IconVariantProps>;
/**
 * Returns the icon component for a given file type string.
 * Accepts file extensions (with or without leading dot), MIME types, or filenames.
 * Falls back to GenericFileIcon for unknown types.
 */
export declare function getFileIcon(fileType: string): IconComponent;
export { PdfIcon, DocIcon, DocxIcon, XlsIcon, XlsxIcon, CsvIcon, PptIcon, PptxIcon, TxtIcon, PngIcon, JpgIcon, JpegIcon, GifIcon, SvgIcon, WebPIcon, TiffIcon, EpsIcon, ImgIcon, Mp4Icon, Mp3Icon, AviIcon, MkvIcon, MpegIcon, WavIcon, ZipIcon, RarIcon, PsdIcon, AiIcon, FigIcon, InddIcon, AepIcon, JsIcon, JsonIcon, HtmlIcon, CssIcon, XmlIcon, SqlIcon, JavaIcon, RssIcon, ExeIcon, DmgIcon, };
