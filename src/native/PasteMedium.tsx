import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PasteMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M16.313 11.812h-4.634v1.504h4.633v-1.504zM11.679 15.527h4.633v1.504H11.68v-1.504z"  /><Path fillRule="evenodd" clipRule="evenodd" d="M4.548 18.49H8.13v2.323h11.322V8.953L15.25 5.576h-.972l-2.725-2.388H4.548V18.49zM8.13 5.577v11.411H6.05V4.691h4.718v.885H8.131zm3.64 0h.226l-.225-.197v.197zM17.95 19.31H9.635V7.082h4.849v2.733h3.465v9.494zM16.874 8.812l-1.387-1.115v1.115h1.387z"  /></Svg>;
}

export default PasteMedium;