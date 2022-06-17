import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function StorageThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 20.688c4.92 0 8.64-1.536 8.64-3.912v-9.6c0-2.352-3.552-3.864-8.64-3.864-4.896 0-8.64 1.512-8.64 3.864v9.6c0 2.376 3.648 3.912 8.64 3.912zm-8.16-3.912v-3.36c1.152 1.536 4.224 2.496 8.16 2.496 3.888 0 7.008-.96 8.16-2.496v3.36c0 1.992-3.336 3.432-8.16 3.432-4.896 0-8.16-1.44-8.16-3.432zm0-4.728V8.544C4.992 10.08 8.064 11.04 12 11.04c3.888 0 7.008-.96 8.16-2.496v3.504c0 1.92-3.336 3.384-8.16 3.384-4.896 0-8.16-1.44-8.16-3.384zm0-4.872c0-1.968 3.36-3.384 8.16-3.384 4.968 0 8.16 1.416 8.16 3.384 0 1.944-3.336 3.384-8.16 3.384-4.896 0-8.16-1.44-8.16-3.384z"  /></Svg>;
}

export default StorageThin;