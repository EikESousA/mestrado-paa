import { useContext } from "react";

import { AppContext } from "@/providers/AppProvider";

export default function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp precisa ser usado com o AppContext!");
  }

  return context;
}
