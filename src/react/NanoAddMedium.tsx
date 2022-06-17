import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoAddMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.832 18.48c-.72 0-1.272-.6-1.272-1.272 0-.696.552-1.248 1.272-1.248a1.24 1.24 0 011.248 1.248c0 .672-.552 1.272-1.248 1.272z"  /><path fillRule="evenodd" clipRule="evenodd" d="M18 11a5 5 0 100-10 5 5 0 000 10zm-.75-8v2.25H15v1.5h2.25V9h1.5V6.75H21v-1.5h-2.25V3h-1.5z"  /><path fillRule="evenodd" clipRule="evenodd" d="M11.15 4.553L9.24 2.64 3.504 8.376l4.728 4.704H1.92v8.28h16.032c2.256 0 4.128-1.872 4.128-4.152 0-1.056-.384-2.064-1.08-2.784l-1.4-1.344h-8.824L6.048 8.376 9.24 5.184l1.834 1.84a7.056 7.056 0 01.076-2.47zM3.72 14.88v4.68h14.232c1.272 0 2.328-1.056 2.328-2.352a2.346 2.346 0 00-2.328-2.328H3.72z"  /><path fillRule="evenodd" clipRule="evenodd" d="M16.56 17.208a1.28 1.28 0 001.272 1.272c.696 0 1.248-.6 1.248-1.272a1.24 1.24 0 00-1.248-1.248c-.72 0-1.272.552-1.272 1.248z"  /></Svg>;
}

export default NanoAddMedium;