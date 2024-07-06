export const RotateWrapper = ({
  flipped,
  className,
  children,
}: Readonly<{
  flipped: boolean;
  className?: string;
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`
        transform ${flipped ? "rotate-180" : ""} ${className}
      `}
    >
      {children}
    </div>
  );
};
