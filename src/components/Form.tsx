import { ComponentProps, FormEvent, FormEventHandler, forwardRef } from "react";

export type IFormProps = ComponentProps<"form"> & {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

type Ref = HTMLFormElement;

const Form = forwardRef<Ref, IFormProps>(
  ({ onSubmit, children, ...rest }, ref) => {
    return (
      <form
        {...rest}
        ref={ref}
        onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}
        className={"flex w-full flex-row items-center justify-between"}
      >
        {children}
      </form>
    );
  },
);

Form.displayName = "Form";

export default Form;
