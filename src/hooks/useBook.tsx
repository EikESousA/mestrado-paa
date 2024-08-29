import { useContext } from "react";

import { BookContext } from "@/providers/BookProvider";

export default function useBook() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useLayout precisa ser usado com o LayoutContext!");
  }

  return context;
}
