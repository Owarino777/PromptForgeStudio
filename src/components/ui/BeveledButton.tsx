import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
};

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function BeveledButton(props: LinkProps | ButtonProps) {
  const { children, variant = 'primary', className = '', ...rest } = props;
  const classes = `beveled-button ${variant === 'ghost' ? 'is-ghost' : 'is-primary'} ${className}`;

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
