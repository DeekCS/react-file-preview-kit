import React from 'react';
import type { IconVariantProps } from './document-icons';

import { PdfIcon, DocIcon, DocxIcon, XlsIcon, XlsxIcon, CsvIcon, PptIcon, PptxIcon, TxtIcon } from './document-icons';
import { PngIcon, JpgIcon, JpegIcon, GifIcon, SvgIcon, WebPIcon, TiffIcon, EpsIcon, ImgIcon } from './image-icons';
import { Mp4Icon, Mp3Icon, AviIcon, MkvIcon, MpegIcon, WavIcon } from './media-icons';
import { ZipIcon, RarIcon } from './archive-icons';
import { PsdIcon, AiIcon, FigIcon, InddIcon, AepIcon } from './design-icons';
import { JsIcon, JsonIcon, HtmlIcon, CssIcon, XmlIcon, SqlIcon, JavaIcon, RssIcon, ExeIcon, DmgIcon } from './development-icons';

export type { IconVariantProps };

export const GenericFileIcon = ({ className, style }: Omit<IconVariantProps, 'variant'>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
    <path d="M11 0.75H27C27.1212 0.75 27.2375 0.798088 27.3232 0.883789L38.1162 11.6768C38.2019 11.7625 38.25 11.8788 38.25 12V36C38.25 37.7949 36.7949 39.25 35 39.25H11C9.20507 39.25 7.75 37.7949 7.75 36V4C7.75 2.20507 9.20508 0.75 11 0.75Z" stroke="#D0D5DD" strokeWidth="1.5"/>
    <path d="M27 0.5V8C27 10.2091 28.7909 12 31 12H38.5" stroke="#D0D5DD" strokeWidth="1.5"/>
    <rect x="1" y="18" width="26" height="16" rx="2" fill="#4A7AFF"/>
    <path d="M6 24h14M6 28h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
GenericFileIcon.displayName = 'GenericFileIcon';

type IconComponent = React.FC<IconVariantProps>;

const iconMap: Record<string, IconComponent> = {
  'pdf': PdfIcon,
  'doc': DocIcon,
  'docx': DocxIcon,
  'xls': XlsIcon,
  'xlsx': XlsxIcon,
  'xlsm': XlsxIcon,
  'xlsb': XlsxIcon,
  'xltx': XlsxIcon,
  'xltm': XlsxIcon,
  'ods': XlsIcon,
  'csv': CsvIcon,
  'ppt': PptIcon,
  'pptx': PptxIcon,
  'txt': TxtIcon,
  'png': PngIcon,
  'jpg': JpgIcon,
  'jpeg': JpegIcon,
  'gif': GifIcon,
  'svg': SvgIcon,
  'webp': WebPIcon,
  'tiff': TiffIcon,
  'tif': TiffIcon,
  'eps': EpsIcon,
  'img': ImgIcon,
  'mp4': Mp4Icon,
  'mp3': Mp3Icon,
  'avi': AviIcon,
  'mkv': MkvIcon,
  'mpeg': MpegIcon,
  'mpg': MpegIcon,
  'wav': WavIcon,
  'zip': ZipIcon,
  'rar': RarIcon,
  'psd': PsdIcon,
  'ai': AiIcon,
  'fig': FigIcon,
  'indd': InddIcon,
  'aep': AepIcon,
  'js': JsIcon,
  'json': JsonIcon,
  'html': HtmlIcon,
  'css': CssIcon,
  'xml': XmlIcon,
  'sql': SqlIcon,
  'java': JavaIcon,
  'rss': RssIcon,
  'exe': ExeIcon,
  'dmg': DmgIcon,
  'application/pdf': PdfIcon,
  'application/msword': DocIcon,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': DocxIcon,
  'application/vnd.ms-excel': XlsIcon,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': XlsxIcon,
  'application/vnd.ms-excel.sheet.macroEnabled.12': XlsxIcon,
  'application/vnd.ms-excel.sheet.binary.macroEnabled.12': XlsxIcon,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.template': XlsxIcon,
  'application/vnd.ms-excel.template.macroEnabled.12': XlsxIcon,
  'application/vnd.oasis.opendocument.spreadsheet': XlsIcon,
  'text/csv': CsvIcon,
  'application/vnd.ms-powerpoint': PptIcon,
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': PptxIcon,
  'text/plain': TxtIcon,
  'image/png': PngIcon,
  'image/jpg': JpgIcon,
  'image/jpeg': JpegIcon,
  'image/gif': GifIcon,
  'image/svg+xml': SvgIcon,
  'image/webp': WebPIcon,
  'image/tiff': TiffIcon,
  'image/eps': EpsIcon,
  'video/mp4': Mp4Icon,
  'audio/mpeg': Mp3Icon,
  'video/avi': AviIcon,
  'video/x-msvideo': AviIcon,
  'video/x-matroska': MkvIcon,
  'video/mpeg': MpegIcon,
  'audio/wav': WavIcon,
  'application/zip': ZipIcon,
  'application/x-zip-compressed': ZipIcon,
  'application/x-rar-compressed': RarIcon,
  'application/vnd.rar': RarIcon,
  'application/javascript': JsIcon,
  'application/json': JsonIcon,
  'text/html': HtmlIcon,
  'text/css': CssIcon,
  'application/xml': XmlIcon,
  'text/xml': XmlIcon,
  'application/sql': SqlIcon,
  'text/x-java-source': JavaIcon,
  'application/rss+xml': RssIcon,
  'application/x-msdownload': ExeIcon,
  'application/octet-stream': ExeIcon,
  'application/x-apple-diskimage': DmgIcon,
};

/**
 * Returns the icon component for a given file type string.
 * Accepts file extensions (with or without leading dot), MIME types, or filenames.
 * Falls back to GenericFileIcon for unknown types.
 */
export function getFileIcon(fileType: string): IconComponent {
  if (!fileType) return GenericFileIcon as IconComponent;
  const lower = fileType.toLowerCase().trim();
  // Direct lookup (MIME type or already clean extension)
  if (iconMap[lower]) return iconMap[lower];
  // Strip leading dot from extension
  const withoutDot = lower.replace(/^\./, '');
  if (iconMap[withoutDot]) return iconMap[withoutDot];
  // Try extracting extension from filename or MIME subtype
  const lastSegment = lower.split(/[\/\.]+/).pop() ?? '';
  return iconMap[lastSegment] ?? (GenericFileIcon as IconComponent);
}

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
  PngIcon,
  JpgIcon,
  JpegIcon,
  GifIcon,
  SvgIcon,
  WebPIcon,
  TiffIcon,
  EpsIcon,
  ImgIcon,
  Mp4Icon,
  Mp3Icon,
  AviIcon,
  MkvIcon,
  MpegIcon,
  WavIcon,
  ZipIcon,
  RarIcon,
  PsdIcon,
  AiIcon,
  FigIcon,
  InddIcon,
  AepIcon,
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
};