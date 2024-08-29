import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface IContext {
  data: boolean;
  toogle: () => void;
}

interface IProps {
  children: ReactNode;
}

export const BookContext = createContext<IContext>({} as IContext);

export default function BookProvider({ children }: IProps) {
  const [data, setData] = useState<boolean>(false);

  const toogle = useCallback(() => {
    setData((prev) => !prev);
  }, []);

  const context = useMemo(() => {
    return {
      data,
      toogle,
    };
  }, [data, toogle]);

  return (
    <BookContext.Provider value={context}>{children}</BookContext.Provider>
  );
}
