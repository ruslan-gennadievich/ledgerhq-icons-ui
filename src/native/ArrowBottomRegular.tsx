import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowBottomRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.372l6.624-6.648-.96-.984-3.312 3.336c-.528.528-1.08 1.08-1.608 1.656V2.628h-1.488v16.104c-.528-.576-1.08-1.128-1.608-1.656L6.336 13.74l-.96.984L12 21.372z"  /></Svg>;
}

export default ArrowBottomRegular;