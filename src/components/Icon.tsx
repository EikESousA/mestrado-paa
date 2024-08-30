import { SVGProps } from "react";

import { IIconDTO } from "@/dtos";
import {
  Clock,
  Close,
  Count,
  Email,
  Github,
  Help,
  Mark,
  Search,
  Trash,
  Upload,
} from "@/svgs";

interface IIconProps extends SVGProps<SVGSVGElement> {
  icon: IIconDTO;
}

export default function Icon({ icon, ...rest }: IIconProps) {
  switch (icon) {
    case "clock":
      return <Clock {...rest} />;
    case "close":
      return <Close {...rest} />;
    case "count":
      return <Count {...rest} />;
    case "email":
      return <Email {...rest} />;
    case "github":
      return <Github {...rest} />;
    case "help":
      return <Help {...rest} />;
    case "mark":
      return <Mark {...rest} />;
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
