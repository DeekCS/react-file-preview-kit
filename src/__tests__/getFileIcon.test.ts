import { describe, it, expect } from 'vitest';
import {
  getFileIcon,
  GenericFileIcon,
  PdfIcon,
  Mp4Icon,
  ZipIcon,
  JsIcon,
  PngIcon,
} from '../index';

describe('getFileIcon', () => {
  describe('extension lookup', () => {
    it('returns PdfIcon for "pdf"', () => {
      expect(getFileIcon('pdf')).toBe(PdfIcon);
    });

    it('returns PdfIcon for ".pdf" with leading dot', () => {
      expect(getFileIcon('.pdf')).toBe(PdfIcon);
    });

    it('returns Mp4Icon for "mp4"', () => {
      expect(getFileIcon('mp4')).toBe(Mp4Icon);
    });

    it('returns ZipIcon for "zip"', () => {
      expect(getFileIcon('zip')).toBe(ZipIcon);
    });

    it('returns JsIcon for "js"', () => {
      expect(getFileIcon('js')).toBe(JsIcon);
    });

    it('returns PngIcon for "png"', () => {
      expect(getFileIcon('png')).toBe(PngIcon);
    });
  });

  describe('MIME type lookup', () => {
    it('returns PdfIcon for "application/pdf"', () => {
      expect(getFileIcon('application/pdf')).toBe(PdfIcon);
    });

    it('returns Mp4Icon for "video/mp4"', () => {
      expect(getFileIcon('video/mp4')).toBe(Mp4Icon);
    });

    it('returns ZipIcon for "application/zip"', () => {
      expect(getFileIcon('application/zip')).toBe(ZipIcon);
    });

    it('returns JsIcon for "application/javascript"', () => {
      expect(getFileIcon('application/javascript')).toBe(JsIcon);
    });

    it('returns PngIcon for "image/png"', () => {
      expect(getFileIcon('image/png')).toBe(PngIcon);
    });
  });

  describe('filename lookup', () => {
    it('returns PdfIcon for filename "report.pdf"', () => {
      expect(getFileIcon('report.pdf')).toBe(PdfIcon);
    });

    it('returns JsIcon for filename "app.js"', () => {
      expect(getFileIcon('app.js')).toBe(JsIcon);
    });
  });

  describe('case insensitivity', () => {
    it('handles uppercase extension "PDF"', () => {
      expect(getFileIcon('PDF')).toBe(PdfIcon);
    });

    it('handles mixed-case MIME "Application/PDF"', () => {
      expect(getFileIcon('Application/PDF')).toBe(PdfIcon);
    });
  });

  describe('fallback', () => {
    it('returns GenericFileIcon for unknown extension', () => {
      expect(getFileIcon('xyz')).toBe(GenericFileIcon);
    });

    it('returns GenericFileIcon for empty string', () => {
      expect(getFileIcon('')).toBe(GenericFileIcon);
    });

    it('returns GenericFileIcon for unknown MIME type', () => {
      expect(getFileIcon('application/x-unknown-format-abc')).toBe(GenericFileIcon);
    });
  });
});
