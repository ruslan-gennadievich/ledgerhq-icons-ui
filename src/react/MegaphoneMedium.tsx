import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function MegaphoneMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path fillRule="evenodd" clipRule="evenodd" d="M17.094 5.094a1 1 0 00-1.686-.229L12.444 8.47l-2.173.968 1.975 4.437 2.173-.967 4.662.209a1 1 0 00.958-1.406l-2.945-6.616zm-6.675 9.594L8.444 10.25l-3.002 1.337a2.429 2.429 0 101.975 4.437l3.002-1.336zm-3.485 3.518A4.43 4.43 0 014.628 9.76l6.57-2.926 2.665-3.24c1.417-1.722 4.15-1.351 5.058.686l2.945 6.616c.908 2.038-.646 4.317-2.874 4.217l-4.19-.187-1.567.697 1.235 1.202c1.522 1.48 1.068 4.028-.871 4.891l-.24.107a3 3 0 01-3.312-.59l-3.113-3.027zm2.124-.723l2.383 2.317a1 1 0 001.104.196l.24-.107a1 1 0 00.29-1.63l-1.808-1.76-2.209.984z"  /></Svg>;
}

export default MegaphoneMedium;