import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ClockSolidMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path fillRule="evenodd" clipRule="evenodd" d="M12 21.36c-5.232 0-9.36-4.128-9.36-9.36 0-5.232 4.128-9.36 9.36-9.36 5.232 0 9.36 4.128 9.36 9.36 0 5.088-4.104 9.36-9.36 9.36zm2.784-5.232l-3.456-3.456A.962.962 0 0111.04 12V6.48h1.92v5.112l3.168 3.192-1.344 1.344z"  /></Svg>;
}

export default ClockSolidMedium;