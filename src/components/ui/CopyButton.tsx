import { Copy, Check } from 'lucide-react';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export function CopyButton({ value, label = 'Copy' }: { value: string; label?: string }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      className="copy-button"
      onClick={() => void copy(value)}
      aria-live="polite"
      aria-label={copied ? 'Copied to clipboard' : label}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span>{copied ? 'Copied' : label}</span>
    </button>
  );
}
