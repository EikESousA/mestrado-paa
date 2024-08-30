import { ComponentProps, forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { IIconDTO, IOnChangeDTO } from "@/dtos";

import Icon from "./Icon";

export interface IInputProps extends ComponentProps<"input"> {
  name: string;
  defaultValue?: string;
  onChange?: IOnChangeDTO;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  iconLeft?: IIconDTO;
  iconRight?: IIconDTO;
  full?: boolean;
}

const disabledVariant = tv({
  base: "",
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "opacity-100",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const fullVariant = tv({
  base: "",
  variants: {
    full: {
      true: "w-full",
      false: "w-auto",
    },
  },
  defaultVariants: {
    full: false,
  },
});

const errorVariant = tv({
  base: "",
  variants: {
    error: {
      true: "w-full",
      false: "w-auto",
    },
  },
  defaultVariants: {
    error: false,
  },
});

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, IInputProps>(
  (
    {
      name,
      defaultValue,
      value,
      placeholder,
      iconLeft,
      iconRight,
      onChange = () => {},
      full = false,
      disabled = false,
      error = false,
      ...rest
    },
    ref,
  ) => {
    const id = useId();

    return (
      <div
        className={twMerge(
          "flex items-center justify-center gap-4 rounded-md border-1 border-gray-4/20 bg-dark-2 p-2",
          disabledVariant({ disabled }),
        )}
      >
        {iconLeft ? (
          <Icon icon={iconLeft} className="size-6 fill-primary-4" />
        ) : null}

        <input
          id={id}
          ref={ref}
          name={name}
          defaultValue={defaultValue}
          onChange={(value) => onChange(value)}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className={twMerge(
            "bg-transparent text-gray-4 disabled:cursor-not-allowed",
            fullVariant({ full }),
            errorVariant({ error }),
          )}
          type="text"
          {...rest}
        />

        {iconRight ? (
          <Icon icon={iconRight} className="size-5 fill-gray-4" />
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
