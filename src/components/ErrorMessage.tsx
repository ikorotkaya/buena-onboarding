interface ErrorMessageProps {
  type: string;
};

export default function ErrorMessage({ type }: ErrorMessageProps) {
  return (
    <div
      data-testid="input-error"
      className="absolute mt-2 text-sm text-red-500"
    >
      {`Please enter a valid ${type}.`}
    </div>
  );
}
