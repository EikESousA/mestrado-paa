import { ComponentProps, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { v4 as uuidv4 } from "uuid";

import { IFileDTO } from "@/dtos/IFileDTO";

import Icon from "./Icon";

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

const dragVariant = tv({
  base: "",
  variants: {
    drag: {
      true: "bg-dark-4",
      false: "bg-dark-2",
    },
  },
  defaultVariants: {
    drag: false,
  },
});

interface IUploadProps extends ComponentProps<"input"> {
  files?: IFileDTO[];
  onChangeFiles?: (value: IFileDTO[]) => void;
  name: string;
  multi?: boolean;
  extension?: "pdf" | "csv";
  full?: boolean;
}

export default function Upload({
  ref,
  name,
  files = [],
  onChangeFiles = () => {},
  multi = false,
  extension = "pdf",
  full = false,
  ...rest
}: IUploadProps) {
  const [filesTmp, setFilesTmp] = useState<IFileDTO[]>(files);

  const onDrop = useCallback((acceptedFiles: (File | undefined)[]) => {
    if (acceptedFiles.length > 0) {
      const updatedFiles: IFileDTO[] = [];

      acceptedFiles.forEach((file) => {
        if (file) {
          const extensionFile = file.name.split(".").pop()?.toLowerCase();

          if (
            extensionFile &&
            extensionFile.toLowerCase() === extension.toLowerCase()
          ) {
            updatedFiles.push({
              id: uuidv4(),
              url: URL.createObjectURL(file),
              name: file.name,
              file,
            });
          }
        }
      });

      setFilesTmp(() => [...updatedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
  });

  return (
    <div className={twMerge("w-full max-w-xl", fullVariant({ full }))}>
      <div
        {...getRootProps()}
        className="flex w-full cursor-pointer flex-col items-start justify-start gap-1"
      >
        <input
          {...rest}
          {...getInputProps()}
          ref={ref}
          id={uuidv4()}
          accept={`.${extension}`}
        />

        {filesTmp.length === 0 ? (
          <div
            className={twMerge(
              dragVariant({ drag: isDragActive }),
              "flex w-full items-center justify-start gap-4 rounded-sm border-1 border-dashed border-gray-1/60 px-3 py-2",
            )}
          >
            <Icon icon="upload" className="size-5 fill-white" />
            <p className="italic text-gray-1">Selecione o arquivo</p>
          </div>
        ) : (
          <div
            className={twMerge(
              dragVariant({ drag: isDragActive }),
              "flex w-full items-center justify-start gap-4 rounded-sm border-1 border-dashed border-gray-1/60 px-3 py-2",
            )}
          >
            <p className="italic text-gray-1">{filesTmp[0].name}</p>
            <Icon icon="trash" className="size-5 fill-gray-1" />
          </div>
        )}
      </div>
    </div>
  );
}
