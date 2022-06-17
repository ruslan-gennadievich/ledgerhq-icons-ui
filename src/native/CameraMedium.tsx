import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function CameraMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M7 6.5H2v14h20v-14h-5l-2-3H9l-2 3zm3.017-1.1l-2 3H3.9v10.2h16.2V8.4h-4.117l-2-3h-3.966z"  /><Path fillRule="evenodd" clipRule="evenodd" d="M12 15.35a2.35 2.35 0 100-4.7 2.35 2.35 0 000 4.7zm0 1.9a4.25 4.25 0 100-8.5 4.25 4.25 0 000 8.5z"  /></Svg>;
}

export default CameraMedium;