import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PasteThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M16.607 12.401h-4.95v.402h4.95v-.402zM11.656 16.37h4.95v.402h-4.95v-.401z"  /><Path fillRule="evenodd" clipRule="evenodd" d="M4.64 18.332h3.828v2.48h10.891V9.034l-4.1-3.294h-1.051l-2.912-2.551H4.641v15.144zM8.469 5.74V17.93H5.043V3.59h5.977v2.15H8.468zm2.953 0h2.177l-2.177-1.908V5.74zm7.536 14.672H8.87V6.14h6.12v3.19h3.968v11.08zm-.37-11.482l-3.197-2.57v2.57h3.197z"  /></Svg>;
}

export default PasteThin;