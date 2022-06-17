import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function SupportRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.536 21.24h2.928c.72 0 1.296-.504 1.368-1.248 1.968-.864 3.408-2.616 3.816-4.728h.408c1.704 0 3.024-1.296 3.024-3.024v-.984c0-1.704-1.32-3.024-3.024-3.024h-.408C18.072 5.16 15.336 2.76 12 2.76s-6.072 2.4-6.648 5.472h-.408c-1.704 0-3.024 1.32-3.024 3.024v.984c0 1.728 1.32 3.024 3.024 3.024h1.848V9.48C6.792 6.6 9.12 4.224 12 4.224c2.904 0 5.208 2.376 5.208 5.256v4.512c0 1.824-.96 3.432-2.4 4.32a1.343 1.343 0 00-1.344-1.128h-2.928c-.792 0-1.392.6-1.392 1.392v1.272c0 .792.6 1.392 1.392 1.392zm-7.224-9v-.984c0-1.128.504-1.632 1.632-1.632h.288v4.272h-.288c-1.128 0-1.632-.504-1.632-1.656zm7.128 7.488v-1.032c0-.144.072-.216.216-.216h2.688c.144 0 .216.072.216.216v1.032c0 .144-.072.216-.216.216h-2.688c-.144 0-.216-.072-.216-.216zm8.328-5.832V9.624h.288c1.128 0 1.656.504 1.656 1.632v.984c0 1.152-.528 1.656-1.656 1.656h-.288z"  /></Svg>;
}

export default SupportRegular;