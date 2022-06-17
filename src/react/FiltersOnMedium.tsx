import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FiltersOnMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12.132 2.64h-1.14v3.84H9V8.4h4.555A6.97 6.97 0 0112 4c0-.465.045-.92.132-1.36zM19 11c.295 0 .586-.018.872-.054v2.686h-2.04v-2.729c.38.064.77.097 1.168.097zM6.192 17.472v3.888h-2.04v-3.888H2.16v-1.92h6v1.92H6.192zM6.192 13.632h-2.04V2.64h2.04v10.992zM13.032 21.36h-2.04V10.32h2.04v11.04zM17.832 17.472H15.84v-1.92h6v1.92h-1.968v3.888h-2.04v-3.888z"  /><circle cx={19} cy={4} r={4}  /></Svg>;
}

export default FiltersOnMedium;