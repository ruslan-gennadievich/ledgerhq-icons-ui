import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EightCircledInitUltraLight({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M13.044 16.704h.048c1.896 0 3.216-1.128 3.216-2.616 0-1.008-.624-1.848-1.656-2.184v-.12c.888-.336 1.416-1.08 1.416-1.968 0-1.392-1.248-2.472-2.976-2.472h-.048c-1.728 0-2.976 1.08-2.976 2.472 0 .912.528 1.632 1.416 1.968v.12c-1.032.336-1.632 1.176-1.632 2.184 0 1.488 1.32 2.616 3.192 2.616zM4.068 12c0 5.04 3.96 9 9 9h6.864v-.84h-6.864c-4.56 0-8.16-3.6-8.16-8.16 0-4.464 3.6-8.16 8.16-8.16h6.864V3h-6.864c-5.04 0-9 4.08-9 9zm6.648 2.16v-.192c0-1.056.792-1.728 2.304-1.728h.096c1.536 0 2.328.672 2.328 1.728v.192c0 1.08-.816 1.752-2.328 1.752h-.096c-1.488 0-2.304-.672-2.304-1.752zm.192-4.224v-.168c0-1.008.744-1.632 2.112-1.632h.096c1.368 0 2.112.624 2.112 1.632v.168c0 .984-.72 1.584-2.112 1.584h-.096c-1.392 0-2.112-.6-2.112-1.584z"  /></Svg>;
}

export default EightCircledInitUltraLight;