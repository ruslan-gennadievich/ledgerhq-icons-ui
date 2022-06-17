import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PasteUltraLight({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M16.55 12.264h-4.89v.662h4.89v-.662zM11.66 16.185h4.89v.662h-4.89v-.662z"  /><path fillRule="evenodd" clipRule="evenodd" d="M4.598 18.388h3.78v2.45h11.024V9.006l-4.135-3.323h-1.036l-2.876-2.52H4.598v15.225zm3.78-12.705v12.043H5.26V3.824h5.64v1.86H8.38zm3.183 0h1.666l-1.666-1.46v1.46zm7.18 14.494H9.04V6.347h5.78v3.148h3.921v10.682zm-.61-11.343l-2.65-2.128v2.128h2.65z"  /></Svg>;
}

export default PasteUltraLight;