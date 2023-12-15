interface ErrorMessageProps {
  children: string;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <div
      data-testid="input-error"
      className="absolute mt-2 text-sm text-red-500"
    >
      {children}
    </div>
  );
}
