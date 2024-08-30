import { useController } from "react-hook-form";

import { IControlDTO } from "@/dtos";

import Input, { IInputProps } from "./Input";

export type IFormInputProps = IInputProps & { control: IControlDTO };

export default function FormInput({
  name,
  defaultValue,
  placeholder,
  disabled,
  error,
  iconLeft,
  iconRight,
  control,
  ...rest
}: IFormInputProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
  });

  return (
    <Input
      name={name}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      ref={ref}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      iconLeft={iconLeft}
      iconRight={iconRight}
      {...rest}
    />
  );
}
