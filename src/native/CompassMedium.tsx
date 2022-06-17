import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function CompassMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M10 10l6-2-2 6-6 2 2-6zm2 3a1 1 0 100-2 1 1 0 000 2z"  /><Path fillRule="evenodd" clipRule="evenodd" d="M12 21.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19zm0-2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"  /></Svg>;
}

export default CompassMedium;