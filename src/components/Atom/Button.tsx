export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  btnType:
    | "primary"
    | "secondary"
    | "tertiary"
    | "accent"
    | "background"
    | "neutral"
    | "base-100"
    | "info"
    | "success"
    | "warning"
    | "error";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const buttonAppearanceType = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  accent: "btn-accent",
  background: "btn-background",
  neutral: "btn-neutral",
  "base-100": "btn-base-100",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
};

export const Button = ({
  children,
  className = "",
  btnType = "primary",
  ...props
}: IButtonProps) => {
  const buttonClasses: string[] = [];
  if (btnType) buttonClasses.push(buttonAppearanceType[btnType]);
  const buttonClassString = buttonClasses.join(" ");
  return (
    <button className={`btn ${buttonClassString} ${className}`} {...props}>
      {children}
    </button>
  );
};
