import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import pdfToText from "react-pdftotext";
import { v4 as uuidv4 } from "uuid";

import { exampleDocument } from "@/assets";
import { IFileDTO } from "@/dtos/IFileDTO";
import { bruteForce } from "@/functions";
import { convertToBlob } from "@/utils";

interface IContext {
  files: IFileDTO[];
  text: string;
  textMark: string;
  loadingFile: boolean;
  loadingSearch: boolean;
  handleFiles: (file: IFileDTO[]) => void;
  handleMark: (filter: string) => void;
}

interface IDatas {
  files: IFileDTO[];
  text: string;
  textMark: string;
  loadingFile: boolean;
  loadingSearch: boolean;
}

interface IProps {
  children: ReactNode;
}

export const AppContext = createContext<IContext>({} as IContext);

export default function AppProvider({ children }: IProps) {
  const [datas, setDatas] = useState<IDatas>({
    files: [],
    text: "",
    textMark: "",
    loadingFile: false,
    loadingSearch: false,
  });

  const handleFiles = useCallback((files: IFileDTO[]) => {
    setDatas((prev) => ({ ...prev, files }));
  }, []);

  const handleText = useCallback(async () => {
    setDatas((prev) => ({ ...prev, loadingFile: true }));

    if (datas.files.length === 0) {
      setDatas((prev) => ({ ...prev, text: "", loadingFile: false }));
      return;
    }

    const blob = await convertToBlob(datas.files[0].url);

    const textPdf = await pdfToText(blob);

    setDatas((prev) => ({
      ...prev,
      text: textPdf,
      textMark: textPdf,
      loadingFile: false,
    }));
  }, [datas.files]);

  const cleanMark = useCallback(() => {
    setDatas((prev) => ({ ...prev, textMark: prev.text }));
  }, []);

  const initExample = useCallback(async () => {
    const blob = await convertToBlob(exampleDocument);

    setDatas((prev) => ({
      ...prev,
      files: [
        {
          id: uuidv4(),
          url: URL.createObjectURL(blob),
          name: "example.pdf",
          file: new File([blob], "example.pdf"),
        },
      ],
    }));
  }, []);

  const handleMark = useCallback(
    (filter: string) => {
      if (filter === "") {
        cleanMark();
        return;
      }

      const index = bruteForce(datas.text, filter);

      if (index >= 0) {
        const textMark =
          datas.text.substring(0, index) +
          `<mark>${filter}</mark>` +
          datas.text.substring(index + filter.length);

        setDatas((prev) => ({ ...prev, textMark }));
      }
    },
    [datas.text],
  );

  useEffect(() => {
    handleText();
  }, [handleText]);

  useEffect(() => {
    initExample();
  }, []);

  const context = useMemo(() => {
    return {
      files: datas.files,
      text: datas.text,
      textMark: datas.textMark,
      loadingFile: datas.loadingFile,
      loadingSearch: datas.loadingSearch,
      handleFiles,
      handleMark,
    };
  }, [
    datas.files,
    datas.text,
    datas.textMark,
    datas.loadingFile,
    datas.loadingSearch,
    handleFiles,
    handleMark,
  ]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
