import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function VideoLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M6.26 10.574a3.885 3.885 0 01-3.88-3.881 3.884 3.884 0 013.88-3.88 3.884 3.884 0 013.88 3.88 3.885 3.885 0 01-3.88 3.88zm0-6.669a2.791 2.791 0 00-2.788 2.788A2.791 2.791 0 006.26 9.48a2.791 2.791 0 002.788-2.788A2.791 2.791 0 006.26 3.905z"  /><Path d="M13.74 10.574a3.885 3.885 0 01-3.88-3.881 3.885 3.885 0 013.88-3.88 3.885 3.885 0 013.88 3.88 3.886 3.886 0 01-3.88 3.88zm0-6.669a2.791 2.791 0 00-2.788 2.788A2.79 2.79 0 0013.74 9.48a2.792 2.792 0 002.788-2.788 2.792 2.792 0 00-2.788-2.788z"  /><Path d="M17.91 21.188H2.11V10.37h15.8v10.816zM3.202 20.095h13.615v-8.631H3.202v8.631z"  /><Path d="M21.89 20.786l-5.073-4.22v-1.997l5.073-4.523v10.74zm-3.98-4.73l2.887 2.401V12.49l-2.887 2.574v.992z"  /></Svg>;
}

export default VideoLight;