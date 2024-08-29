import { logoImage } from "@/assets";

import Icon from "./Icon";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between px-8 py-4">
      <img src={logoImage} alt="Logo da UFS" className="h-24" />

      <div className="flex h-full flex-col items-center justify-center">
        <p className="font-default text-6 font-bold text-gray-1">PAA</p>
        <p className="font-default text-6 font-bold text-gray-1">
          Processamento de cadeias
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          className="group flex items-center justify-center rounded-md border-1 border-gray-4/60 p-2 transition-colors hover:border-gray-1 hover:bg-gray-1/10"
        >
          <Icon
            icon="github"
            className="size-8 fill-gray-1/60 transition-colors group-hover:fill-gray-1"
          />
        </button>

        <button
          type="button"
          className="group flex items-center justify-center rounded-md border-1 border-gray-4/60 p-2 transition-colors hover:border-gray-1 hover:bg-gray-1/10"
        >
          <Icon
            icon="help"
            className="size-8 fill-gray-1/60 transition-colors group-hover:fill-gray-1"
          />
        </button>
      </div>
    </header>
  );
}
