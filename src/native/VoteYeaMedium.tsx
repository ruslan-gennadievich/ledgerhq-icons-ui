import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function VoteYeaMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.813 12.988c.11.112.37.112.52 0l4.34-4.342a.397.397 0 00.038-.519l-.89-.89c-.112-.112-.372-.112-.52 0l-3.229 3.228-1.41-1.41a.359.359 0 00-.52 0l-.853.853a.359.359 0 000 .52l2.524 2.56zm11.28-.52h-2.968V3.823c0-.779-.557-1.447-1.224-1.447H6.063c-.668 0-1.188.668-1.188 1.447v8.647H1.906a1.782 1.782 0 00-1.78 1.781v5.344c0 1.002.778 1.781 1.78 1.781h20.188c.965 0 1.781-.78 1.781-1.781V14.25c0-.965-.816-1.781-1.781-1.781zm-4.75-8.312v11.875H6.657V4.156h10.688zm4.75 15.438H1.907V14.25h2.97v1.781h-.854c-.186 0-.334.149-.334.297v1.188c0 .185.148.297.334.297h15.92c.185 0 .37-.112.37-.297v-1.188c0-.148-.185-.297-.37-.297h-.817V14.25h2.969v5.344z"  /></Svg>;
}

export default VoteYeaMedium;