import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { Button } from "../../ui/button";

type CustomButtonProps = {
  className?: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "secondary" | "ghost" | "link" | "outline";
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  size?: "default" | "sm" | "lg" | "icon";
  title?: string;
};

export const CustomButton = ({
  className,
  onClick,
  variant = "default",
  children,
  disabled,
  isLoading,
  type = "button",
  size = "default",
  title,
}: CustomButtonProps) => {
  return (
    <Button
      size={size}
      type={type}
      disabled={disabled || isLoading}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      variant={variant}
      title={title}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? "Guardando" : children}
    </Button>
  );
};
