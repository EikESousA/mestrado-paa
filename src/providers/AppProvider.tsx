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
import { IAlgortimDTO, IFileDTO } from "@/dtos";
import { bruteForce, kmp, rabinKarp } from "@/functions";
import { convertToBlob } from "@/utils";

interface IContext {
  files: IFileDTO[];
  text: string;
  textMark: string;
  loadingFile: boolean;
  loadingSearch: boolean;
  algoritms: IAlgortimDTO[];
  modal: boolean;
  handleFiles: (file: IFileDTO[]) => void;
  handleMark: (filter: string) => void;
  toogleModal: () => void;
}

interface IDatas {
  files: IFileDTO[];
  text: string;
  textMark: string;
  loadingFile: boolean;
  loadingSearch: boolean;
  algoritms: IAlgortimDTO[];
  modal: boolean;
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
    algoritms: [],
    modal: false,
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
    setDatas((prev) => ({
      ...prev,
      textMark: prev.text,
      algoritms: [],
    }));
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

      setDatas((prev) => ({ ...prev, loadingSearch: true }));

      let textMark = datas.text;
      const value = filter.length;

      const dataBruteForce = bruteForce(textMark, filter);

      const dataKMP = kmp(textMark, filter);

      const dataRabinKarp = rabinKarp(textMark, filter);

      if (dataBruteForce.indexes.length > 0) {
        let offset = 0;

        dataBruteForce.indexes.forEach((index) => {
          textMark =
            textMark.slice(0, index + offset) +
            "<mark>" +
            textMark.slice(index + offset);
          offset += "<mark>".length;

          textMark =
            textMark.slice(0, index + value + offset) +
            "</mark>" +
            textMark.slice(index + value + offset);
          offset += "</mark>".length;
        });
      }

      setDatas((prev) => ({
        ...prev,
        textMark,
        loadingSearch: false,
        algoritms: [dataBruteForce, dataKMP, dataRabinKarp],
      }));
    },
    [datas.text],
  );

  const toogleModal = useCallback(() => {
    setDatas((prev) => ({ ...prev, modal: !prev.modal }));
  }, []);

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
      algoritms: datas.algoritms,
      modal: datas.modal,
      handleFiles,
      handleMark,
      toogleModal,
    };
  }, [
    datas.files,
    datas.text,
    datas.textMark,
    datas.loadingFile,
    datas.loadingSearch,
    datas.algoritms,
    datas.modal,
    handleFiles,
    handleMark,
    toogleModal,
  ]);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
