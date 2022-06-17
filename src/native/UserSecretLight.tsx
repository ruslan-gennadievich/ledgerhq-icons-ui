import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function UserSecretLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M4.608 19.416v1.944h14.784v-1.944c0-2.232-1.008-4.056-2.832-4.872v-3.432H7.464v3.432c-1.824.84-2.856 2.64-2.856 4.872zM5.76 7.44h3.768a1.32 1.32 0 00-.792 1.224c0 .72.6 1.344 1.344 1.344.744 0 1.368-.624 1.368-1.344 0-.552-.336-1.008-.816-1.224h2.712a1.32 1.32 0 00-.792 1.224c0 .72.6 1.344 1.368 1.344.72 0 1.344-.624 1.344-1.344 0-.552-.336-1.008-.792-1.224h3.768V6.288h-2.28V4.176c0-.864-.672-1.536-1.536-1.536H9.576c-.864 0-1.536.672-1.536 1.536v2.112H5.76V7.44zm.12 12.768v-1.392c0-1.896.888-3.024 2.712-3.456v-3.168h2.904v8.016H5.88zm3.24-13.92V4.272c0-.336.216-.552.552-.552h4.656c.336 0 .552.216.552.552v2.016H9.12zm3.384 13.92v-8.016h2.904v3.168c1.824.408 2.736 1.56 2.736 3.456v1.392h-5.64z"  /></Svg>;
}

export default UserSecretLight;