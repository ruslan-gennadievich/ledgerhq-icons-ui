import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function Filters3Regular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M10.113 8.337A2.578 2.578 0 017.63 6.435h-3.56V5.087h3.56a2.578 2.578 0 012.484-1.9 2.58 2.58 0 012.485 1.9h7.333v1.348h-7.333a2.578 2.578 0 01-2.485 1.902zm0-3.802a1.228 1.228 0 000 2.455 1.228 1.228 0 000-2.455zM14.437 14.575a2.578 2.578 0 01-2.485-1.901H4.069v-1.348h7.883a2.577 2.577 0 012.485-1.903 2.578 2.578 0 012.485 1.903h3.01v1.348h-3.01a2.578 2.578 0 01-2.485 1.901zm0-3.802a1.228 1.228 0 00-1.227 1.225 1.23 1.23 0 001.227 1.228 1.229 1.229 0 001.227-1.228 1.228 1.228 0 00-1.227-1.225zM8.294 20.057a2.578 2.578 0 001.82.756 2.578 2.578 0 002.484-1.901h7.333v-1.348h-7.333a2.579 2.579 0 00-2.485-1.901 2.578 2.578 0 00-2.484 1.9h-3.56v1.349h3.56c.117.43.344.825.665 1.145zm.952-2.686a1.227 1.227 0 111.736 1.735 1.227 1.227 0 01-1.736-1.736z"  /></Svg>;
}

export default Filters3Regular;