import { useApp } from "@/hooks";

import Loading from "./Loading";

export default function PDF() {
  const { textMark, loadingFile } = useApp();

  if (loadingFile) {
    return (
      <div className="flex size-full items-center justify-center overflow-y-auto overflow-x-hidden rounded-l-md bg-dark-1 px-8 py-4 text-justify text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div
      className="size-full overflow-y-auto overflow-x-hidden rounded-l-md bg-dark-1 px-8 py-4 text-justify text-white"
      dangerouslySetInnerHTML={{ __html: textMark }}
    />
  );
}
