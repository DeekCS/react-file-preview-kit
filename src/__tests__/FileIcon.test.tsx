import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FileIcon } from '../index';

describe('FileIcon', () => {
  describe('accessibility', () => {
    it('renders with role="img"', () => {
      render(<FileIcon fileType="pdf" />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('has default aria-label using fileType', () => {
      render(<FileIcon fileType="pdf" />);
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'pdf file icon');
    });

    it('uses custom ariaLabel when provided', () => {
      render(<FileIcon fileType="pdf" ariaLabel="PDF document icon" />);
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'PDF document icon');
    });
  });

  describe('sizes', () => {
    it('applies sm size Tailwind classes to the svg element', () => {
      const { container } = render(<FileIcon fileType="pdf" size="sm" />);
      const svg = container.querySelector('svg');
      // SIZE_CLASSES.sm = 'w-20 h-10 sm:w-10 sm:h-10'
      expect(svg?.getAttribute('class')).toContain('w-20');
    });

    it('applies custom inline style when size="custom" and customSize is a number', () => {
      const { container } = render(
        <FileIcon fileType="pdf" size="custom" customSize={80} />
      );
      const svg = container.querySelector('svg');
      expect(svg).toHaveStyle({ width: '80px', height: '80px' });
    });

    it('applies custom inline style when customSize is an object', () => {
      const { container } = render(
        <FileIcon fileType="pdf" size="custom" customSize={{ width: 60, height: 80 }} />
      );
      const svg = container.querySelector('svg');
      expect(svg).toHaveStyle({ width: '60px', height: '80px' });
    });
  });

  describe('unknown file types', () => {
    it('renders GenericFileIcon for unknown fileType without crashing', () => {
      render(<FileIcon fileType="unknown-xyz-type-abc" />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('renders GenericFileIcon for empty string without crashing', () => {
      render(<FileIcon fileType="" />);
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });

  describe('className prop', () => {
    it('passes extra className to the icon', () => {
      const { container } = render(
        <FileIcon fileType="pdf" className="extra-class" />
      );
      const svg = container.querySelector('svg');
      expect(svg?.getAttribute('class')).toContain('extra-class');
    });
  });
});
