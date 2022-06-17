import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function SearchDollarLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M15.3 16.188l5.736 5.76.912-.912-5.76-5.736a7.845 7.845 0 001.944-5.208c0-4.416-3.624-8.04-8.04-8.04-4.416 0-8.04 3.624-8.04 8.04 0 4.416 3.624 8.04 8.04 8.04 1.992 0 3.816-.72 5.208-1.944zM3.252 10.092c0-3.768 3.072-6.84 6.84-6.84s6.84 3.072 6.84 6.84-3.072 6.84-6.84 6.84-6.84-3.072-6.84-6.84zm3.912 1.056c-.024 1.512 1.008 2.568 2.52 2.736v.936h.84v-.936c1.464-.144 2.496-1.08 2.496-2.304 0-1.152-.84-1.824-2.136-2.016L9.636 9.42c-.864-.12-1.248-.432-1.248-1.104 0-.864.648-1.272 1.752-1.272 1.2 0 1.704.48 1.704 1.632h1.032c0-1.368-.96-2.376-2.352-2.52V5.22h-.84v.936c-1.32.168-2.256 1.032-2.256 2.208 0 1.104.72 1.776 1.944 1.92l1.224.144c.96.12 1.392.456 1.392 1.2 0 .912-.624 1.368-1.872 1.368-1.344 0-1.944-.552-1.968-1.848h-.984z"  /></Svg>;
}

export default SearchDollarLight;