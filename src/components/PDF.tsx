import { useEffect, useState } from "react";
import pdfToText from "react-pdftotext";

import { exampleDocument } from "@/assets";
import { convertToBlob } from "@/utils";

export default function PDF() {
  const [text, setText] = useState("");

  async function getText() {
    const blob = await convertToBlob(exampleDocument);

    const textPdf = await pdfToText(blob);

    setText(textPdf);
  }

  // useEffect(() => {
  //   getText();
  // }, []);

  return <div className="h-128 w-full overflow-y-auto text-white">{text}</div>;
}
