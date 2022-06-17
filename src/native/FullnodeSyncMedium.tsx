import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeSyncMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.692 20.676c.24 0 .456-.024.696-.024l-1.92-1.92-.912-.072c-2.4-.264-3.648-.96-3.648-1.776v-1.248c1.344.768 3.408 1.2 5.784 1.2h.792l1.848-1.848 1.344 1.344c2.232-.624 3.72-1.8 3.72-3.408v-7.2c0-2.448-3.336-3.768-7.704-3.768-4.248 0-7.704 1.32-7.704 3.768v11.16c0 2.448 3.384 3.936 7.704 3.792zm-5.784-7.512v-1.248c1.344.792 3.408 1.224 5.784 1.224 2.352 0 4.416-.432 5.784-1.224v1.248c0 1.728-4.248 1.992-5.784 1.992-3.744 0-5.784-.888-5.784-1.992zm0-3.72V8.22c1.344.768 3.408 1.2 5.784 1.2 2.328 0 4.416-.432 5.784-1.224v1.248c0 1.104-2.112 2.016-5.784 2.016-3.744 0-5.784-.912-5.784-2.016zm0-3.72c0-1.008 2.064-1.848 5.784-1.848 3.84 0 5.784.816 5.784 1.848 0 1.128-2.112 2.016-5.784 2.016-3.744 0-5.784-.888-5.784-2.016zm7.08 12.936l3.36 3.384 5.664-5.688-1.344-1.344-4.32 4.296-2.016-1.992-1.344 1.344z"  /></Svg>;
}

export default FullnodeSyncMedium;