import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  variant: 'primary' | 'secondary' | 'disabled';
  isLink: boolean;
  href?: string;
  target?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  className,
  onClick,
  variant,
  isLink = false,
  href,
  target,
  disabled,
  children,
}: ButtonProps) {
  return (
    <>
      {isLink && !disabled ? (
        <a
          onClick={onClick}
          className={
            className ? [styles[variant], className].join(' ') : styles[variant]
          }
          href={href}
          target={target}
          rel={target && 'noreferrer noopener'}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          disabled={disabled}
          className={
            className ? [styles[variant], className].join(' ') : styles[variant]
          }
        >
          {children}
        </button>
      )}
    </>
  );
}
