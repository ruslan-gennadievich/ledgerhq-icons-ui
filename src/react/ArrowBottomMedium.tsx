import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowBottomMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 21.372l6.624-6.648-1.176-1.2-3.36 3.384c-.384.384-.792.816-1.176 1.248V2.628h-1.824v15.528a29.781 29.781 0 00-1.176-1.248l-3.36-3.384-1.176 1.2L12 21.372z"  /></Svg>;
}

export default ArrowBottomMedium;