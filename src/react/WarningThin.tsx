import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function WarningThin({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M2.736 19.4h18.528L12 2.6 2.736 19.4zm.792-.48L12 3.56l8.472 15.36H3.528zm7.752-1.68h1.44V15.8h-1.44v1.44zm.48-3.072h.48V8.36h-.48v5.808z"  /></Svg>;
}

export default WarningThin;