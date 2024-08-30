import { useApp } from "@/hooks";
import { numberWithCommas } from "@/utils";

export default function Search() {
  const { files, text } = useApp();

  if (files.length > 0) {
    return (
      <div className="flex h-full w-96 flex-col items-start justify-start gap-4 rounded-r-md bg-dark-2 p-4 text-4 text-white">
        <div>
          <p>
            <strong>Nome do Arquivo:</strong>
          </p>
          <p>{files[0].name}</p>
        </div>

        <div>
          <p>
            <strong>Quantidade de caracteres:</strong>
          </p>
          <p>{numberWithCommas(String(text.length))}</p>
        </div>
      </div>
    );
  }
}
