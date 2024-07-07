import type { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

export const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => (
    <button
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon/>}
      {label}
    </button>
);
