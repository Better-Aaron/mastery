import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccssProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccssProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-2.5 text-sm text-emerald-500">
      <CheckCircledIcon className="size-4" />
      <p>{message}</p>
    </div>
  );
};
