type BadgeVariant = "default" | "primary" | "success" | "warning" | "error";

export const Badge = ({
  text,
  variant = "default",
}: {
  text: string;
  variant?: BadgeVariant;
}) => {
  const styles = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}
    >
      {text}
    </span>
  );
};
