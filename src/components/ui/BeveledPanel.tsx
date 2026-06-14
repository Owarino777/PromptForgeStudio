import type { ReactNode } from 'react';

export function BeveledPanel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`beveled-panel ${className}`}>{children}</div>;
}
