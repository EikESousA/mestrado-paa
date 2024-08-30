import { useController } from "react-hook-form";

import { IControlDTO } from "@/dtos/IControlDTO";

import Upload, { IUploadProps } from "./Upload";

type IFormUploadProps = IUploadProps & {
  control: IControlDTO;
};

export default function FormUpload({
  multi = false,
  extension = "pdf",
  name,
  className,
  control,
  ...rest
}: IFormUploadProps) {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
  });

  return (
    <Upload
      {...rest}
      onChangeFiles={onChange}
      files={value}
      ref={ref}
      multi={multi}
      extension={extension}
      className={className}
      name={name}
    />
  );
}
