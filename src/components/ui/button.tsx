import { MouseEventHandler } from "react";

export const Button = ({
  variant,
  className,
  children,
  onClick,
}: Readonly<{
  variant: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>) => {
  return (
    <button
      className={`
        ${
          variant === "solid"
            ? "bg-black text-white"
            : "border border-black text-white"
        }
        px-4 py-2 rounded-lg ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
