// Default export
export { default } from './components/FilePreview';

// Named component exports
export { default as FilePreview } from './components/FilePreview';
export { default as FileIcon } from './components/FileIcon';

// Registry utility
export { getFileIcon, GenericFileIcon } from './icons/file-icon-registry';

// Individual icon components
export {
  PdfIcon,
  DocIcon,
  DocxIcon,
  XlsIcon,
  XlsxIcon,
  CsvIcon,
  PptIcon,
  PptxIcon,
  TxtIcon,
} from './icons/document-icons';

export {
  PngIcon,
  JpgIcon,
  JpegIcon,
  GifIcon,
  SvgIcon,
  WebPIcon,
  TiffIcon,
  EpsIcon,
  ImgIcon,
} from './icons/image-icons';

export {
  Mp4Icon,
  Mp3Icon,
  AviIcon,
  MkvIcon,
  MpegIcon,
  WavIcon,
} from './icons/media-icons';

export { ZipIcon, RarIcon } from './icons/archive-icons';

export {
  PsdIcon,
  AiIcon,
  FigIcon,
  InddIcon,
  AepIcon,
} from './icons/design-icons';

export {
  JsIcon,
  JsonIcon,
  HtmlIcon,
  CssIcon,
  XmlIcon,
  SqlIcon,
  JavaIcon,
  RssIcon,
  ExeIcon,
  DmgIcon,
} from './icons/development-icons';

// Types
export type { FileInfo, FilePreviewProps, ScrollDirection } from './components/FilePreview';
export type { FileIconProps, FileIconVariant } from './components/FileIcon';
export type { IconVariantProps } from './icons/file-icon-registry';
