import styles from './Button.module.css';

interface ButtonProps {
  onClick?: (event: React.MouseEvent) => void;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  variant,
  disabled,
  children,
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles[variant]}>
      {children}
    </button>
  );
}
