import { SVGProps } from "react";

import { IIconDTO } from "@/dtos";
import { Clock, Count, Github, Help, Search, Trash, Upload } from "@/svgs";

interface IProps extends SVGProps<SVGSVGElement> {
  icon: IIconDTO;
}

export default function Icon({ icon, ...rest }: IProps) {
  switch (icon) {
    case "clock":
      return <Clock {...rest} />;
    case "count":
      return <Count {...rest} />;
    case "github":
      return <Github {...rest} />;
    case "help":
      return <Help {...rest} />;
    case "search":
      return <Search {...rest} />;
    case "trash":
      return <Trash {...rest} />;
    case "upload":
      return <Upload {...rest} />;
    default:
      return null;
  }
}
