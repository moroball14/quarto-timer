export const Button = ({
  variant,
  className,
  children,
}: Readonly<{
  variant: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
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
    >
      {children}
    </button>
  );
};
