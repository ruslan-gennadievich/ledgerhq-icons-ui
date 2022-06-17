import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function Filters3Medium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path fillRule="evenodd" clipRule="evenodd" d="M10.149 8.571a2.695 2.695 0 01-2.502-1.7h-3.43V4.886h3.43a2.695 2.695 0 012.502-1.699 2.695 2.695 0 012.5 1.7h7.132V6.87h-7.13a2.694 2.694 0 01-2.502 1.7zm0-3.73a1.04 1.04 0 000 2.078 1.04 1.04 0 000-2.079zM14.39 14.692a2.695 2.695 0 01-2.501-1.7H4.218v-1.985h7.67a2.693 2.693 0 014.405-.912c.263.263.466.574.6.912h2.89v1.985h-2.89a2.697 2.697 0 01-2.503 1.7zm0-3.73a1.04 1.04 0 00-1.038 1.036 1.04 1.04 0 001.038 1.04 1.04 1.04 0 001.04-1.04 1.04 1.04 0 00-1.04-1.037zM8.246 20.023a2.695 2.695 0 001.902.79 2.695 2.695 0 002.502-1.7h7.131v-1.984H12.65a2.695 2.695 0 00-2.502-1.7 2.694 2.694 0 00-2.501 1.7h-3.43v1.984h3.43c.134.338.337.648.599.91zm1.168-2.636a1.04 1.04 0 111.47 1.47 1.04 1.04 0 01-1.47-1.47z"  /></Svg>;
}

export default Filters3Medium;