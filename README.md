# react-file-preview-kit

React file preview component with 50+ file type icons. Accepts file extensions, MIME types, or filenames. Built for React + Tailwind CSS.

## Install

```bash
npm install react-file-preview-kit
```

## Tailwind Setup (Required)

Add the package's dist files to your Tailwind `content` config so utility classes are included:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your existing paths
    './node_modules/react-file-preview-kit/dist/**/*.js',
  ],
}
```

## Usage

### FilePreview — full file card UI

```tsx
import FilePreview from 'react-file-preview-kit';

<FilePreview
  files={[
    { name: 'report.pdf', size: 204800, type: 'application/pdf' }
  ]}
  onDelete={(file, index) => console.log('delete', file.name)}
  onView={(file, index) => console.log('view', file.name)}
/>
```

### FileIcon — icon only

```tsx
import { FileIcon } from 'react-file-preview-kit';

<FileIcon fileType="application/pdf" size="md" variant="default" />
<FileIcon fileType=".docx" size="lg" variant="solid" />
<FileIcon fileType="photo.png" size="custom" customSize={64} />
```

### getFileIcon — headless utility

```ts
import { getFileIcon } from 'react-file-preview-kit';

const Icon = getFileIcon('application/pdf'); // → PdfIcon component
const Icon2 = getFileIcon('.docx');          // → DocxIcon component
const Icon3 = getFileIcon('photo.png');      // → PngIcon component
const Icon4 = getFileIcon('unknown');        // → GenericFileIcon (fallback)
```

## FilePreview Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `files` | `FileInfo \| FileInfo[]` | required | File(s) to display |
| `onView` | `(file, index) => void` | opens in new tab | View button callback |
| `onDelete` | `(file, index) => void` | — | Delete button callback |
| `showViewButton` | `boolean` | `true` | Show/hide view button |
| `showDeleteButton` | `boolean` | `true` | Show/hide delete button |
| `scrollDirection` | `'horizontal' \| 'vertical' \| 'none'` | `'vertical'` | Scroll behavior |
| `maxHeight` | `number` | `200` | Max height (px) for vertical scroll |
| `maxWidth` | `number` | `600` | Max width (px) for horizontal scroll |
| `containerClassName` | `string` | — | Extra CSS classes on container |

## FileIcon Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `fileType` | `string` | required | Extension, MIME type, or filename |
| `variant` | `'default' \| 'gray' \| 'solid'` | `'default'` | Visual style |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'custom'` | `'sm'` | Size preset |
| `customSize` | `number \| { width: number; height: number }` | `64` | Used when `size="custom"` |
| `className` | `string` | — | Extra CSS classes |
| `ariaLabel` | `string` | `"{fileType} file icon"` | Accessibility label |

## Supported File Types

**Documents:** PDF, DOC, DOCX, XLS, XLSX, CSV, PPT, PPTX, TXT  
**Images:** PNG, JPG, JPEG, GIF, SVG, WebP, TIFF, EPS  
**Media:** MP4, MP3, AVI, MKV, MPEG, WAV  
**Archives:** ZIP, RAR  
**Design:** PSD, AI, FIG, INDD, AEP  
**Development:** JS, JSON, HTML, CSS, XML, SQL, Java, RSS, EXE, DMG  

All MIME type variants for the above are also supported.

## License

MIT
