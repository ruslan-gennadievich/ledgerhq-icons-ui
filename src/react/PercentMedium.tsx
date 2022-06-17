import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PercentMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M18.352 4.21L4.21 18.352l1.442 1.443L19.795 5.652 18.352 4.21zM9 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM20 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"  /></Svg>;
}

export default PercentMedium;