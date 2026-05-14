import { useState } from 'react';
import FilePreview, { FileIcon, getFileIcon } from '@kareem-dev/react-file-preview-kit';

const DEMO_FILES = [
  { name: 'report.pdf', size: 204800, type: 'application/pdf', url: '#' },
  { name: 'photo.png', size: 1048576, type: 'image/png', url: '#' },
  {
    name: 'data.xlsx',
    size: 512000,
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    url: '#',
  },
  { name: 'archive.zip', size: 2097152, type: 'application/zip', url: '#' },
  { name: 'app.js', size: 8192, type: 'application/javascript', url: '#' },
  { name: 'design.figma', size: 3145728, type: 'application/figma', url: '#' },
];

const ICON_TYPES = ['pdf', 'png', 'docx', 'xlsx', 'mp4', 'mp3', 'zip', 'js', 'html', 'css', 'psd', 'ai'];

export default function App() {
  const [deleted, setDeleted] = useState<string[]>([]);
  const files = DEMO_FILES.filter((f) => !deleted.includes(f.name));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-3xl space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">react-file-preview-kit</h1>
          <p className="mt-1 text-gray-500">Demo — FilePreview, FileIcon, getFileIcon</p>
        </div>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-700">FilePreview</h2>
          <FilePreview
            files={files}
            onDelete={(file) => setDeleted((prev) => [...prev, file.name])}
            onView={(file) => alert(`Viewing: ${file.name}`)}
            scrollDirection="vertical"
          />
          {deleted.length > 0 && (
            <button
              onClick={() => setDeleted([])}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Reset deleted files
            </button>
          )}
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-700">FileIcon — sizes</h2>
          <div className="flex items-end gap-6 rounded-xl border bg-white p-6">
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <FileIcon fileType="pdf" size={size} />
                <span className="text-xs text-gray-400">{size}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <FileIcon fileType="pdf" size="custom" customSize={80} />
              <span className="text-xs text-gray-400">custom 80px</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-700">FileIcon — variants</h2>
          <div className="flex items-center gap-8 rounded-xl border bg-white p-6">
            {(['default', 'gray', 'solid'] as const).map((variant) => (
              <div key={variant} className="flex flex-col items-center gap-2">
                <FileIcon fileType="pdf" size="lg" variant={variant} />
                <span className="text-xs text-gray-400">{variant}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-700">Supported file types</h2>
          <div className="grid grid-cols-2 gap-4 rounded-xl border bg-white p-6 sm:grid-cols-4 md:grid-cols-6">
            {ICON_TYPES.map((type) => (
              <div key={type} className="flex flex-col items-center gap-1">
                <FileIcon fileType={type} size="md" />
                <span className="text-xs text-gray-400">.{type}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-700">getFileIcon — headless</h2>
          <div className="space-y-3 rounded-xl border bg-white p-6">
            <p className="text-sm text-gray-500">Resolving icons from extension, MIME type, or filename:</p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: '"pdf"', type: 'pdf' },
                { label: '"image/png"', type: 'image/png' },
                { label: '"report.docx"', type: 'report.docx' },
                { label: '"unknown"', type: 'unknown' },
              ].map(({ label, type }) => {
                const Icon = getFileIcon(type);
                return (
                  <div key={type} className="flex flex-col items-center gap-1">
                    <Icon style={{ width: 48, height: 48 }} />
                    <span className="text-xs text-gray-400">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
