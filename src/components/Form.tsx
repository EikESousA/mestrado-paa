import { ComponentProps, FormEvent, FormEventHandler, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type IFormProps = ComponentProps<"form"> & {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

type Ref = HTMLFormElement;

const Form = forwardRef<Ref, IFormProps>(
  ({ onSubmit, className, children, ...rest }, ref) => {
    return (
      <form
        {...rest}
        ref={ref}
        onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}
        className={twMerge(
          "flex w-full flex-row items-center justify-between border-y-1 border-gray-4/20 bg-dark-default px-8 py-4",
          className,
        )}
      >
        {children}
      </form>
    );
  },
);

Form.displayName = "Form";

export default Form;
