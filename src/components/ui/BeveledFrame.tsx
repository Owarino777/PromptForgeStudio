import type { ReactNode } from 'react';

export function BeveledFrame({ children }: { children: ReactNode }) {
  return <div className="beveled-frame">{children}</div>;
}
