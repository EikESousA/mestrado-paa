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
import { convertToBlob } from "@/utils";

interface IContext {
  files: IFileDTO[];
  text: string;
  handleFiles: (file: IFileDTO[]) => void;
}

interface IDatas {
  files: IFileDTO[];
  text: string;
}

interface IProps {
  children: ReactNode;
}

export const AppContext = createContext<IContext>({} as IContext);

export default function AppProvider({ children }: IProps) {
  const [datas, setDatas] = useState<IDatas>({
    files: [],
    text: "",
  });

  const handleFiles = useCallback((files: IFileDTO[]) => {
    console.log("handleFiles", { files });
    setDatas((prev) => ({ ...prev, files }));
  }, []);

  const handleText = useCallback(async (files: IFileDTO[]) => {
    console.log("handleText", { files });

    if (files.length === 0) {
      setDatas((prev) => ({ ...prev, text: "" }));
      return;
    }

    const blob = await convertToBlob(files[0].url);

    const textPdf = await pdfToText(blob);

    setDatas((prev) => ({ ...prev, text: textPdf }));
  }, []);

  const initExample = useCallback(async () => {
    const blob = await convertToBlob(exampleDocument);

    handleFiles([
      {
        id: uuidv4(),
        url: URL.createObjectURL(blob),
        name: "example.pdf",
        file: new File([blob], "example.pdf"),
      },
    ]);
  }, [handleFiles]);

  console.log({ datas });

  useEffect(() => {
    console.log("USE1");
    initExample();
  }, []);

  useEffect(() => {
    console.log("USE2");
    handleText(datas.files);
  }, [datas.files]);

  const context = useMemo(() => {
    return {
      files: datas.files,
      text: datas.text,
      handleFiles,
    };
  }, [datas.files, datas.text, handleFiles]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
