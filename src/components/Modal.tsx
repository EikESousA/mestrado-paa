import { ComponentProps } from "react";
import { createPortal } from "react-dom";

import Icon from "./Icon";

export interface IModalProps extends ComponentProps<"dialog"> {
  open: boolean;
  onClose: () => void;
}

export default function Modal({
  open,
  onClose,
  children,
  ...rest
}: IModalProps) {
  if (open) {
    return (
      <>
        {createPortal(
          <dialog
            open
            className="fixed inset-0 z-app flex h-screen w-screen flex-row items-center justify-center bg-transparent"
            {...rest}
          >
            <button
              type="button"
              className={
                "fixed inset-0 flex h-screen w-screen cursor-pointer bg-[#00000095]"
              }
              onClick={() => onClose()}
              aria-label="backdrop"
            />

            <div className="relative z-modal flex h-[80vh] max-h-[46rem] w-[80vw] max-w-[50rem] flex-col items-center justify-start bg-dark-2 px-6 py-4">
              <button
                type="button"
                onClick={() => onClose()}
                className="group absolute right-[1rem] top-[1rem] z-popover flex items-center justify-center rounded-md border-1 border-gray-4/60 p-2 transition-colors hover:border-gray-1 hover:bg-gray-1/10"
              >
                <Icon
                  icon="close"
                  className="size-8 fill-gray-1/60 transition-colors group-hover:fill-gray-1"
                />
              </button>
              {children}
            </div>
          </dialog>,
          document.getElementById("root") || document.body,
        )}
        ,
      </>
    );
  }
}
