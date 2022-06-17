import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function GlobeRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 21.24c5.232 0 9.24-4.224 9.24-9.24 0-5.16-4.032-9.24-9.24-9.24S2.76 6.84 2.76 12s4.032 9.24 9.24 9.24zM4.224 12c0-.84.12-1.656.36-2.4h3.168a19.537 19.537 0 00-.144 2.4c0 .816.048 1.632.144 2.4H4.584a7.848 7.848 0 01-.36-2.4zm.864 3.672h2.904c.36 1.56.984 2.904 1.992 3.912a7.6 7.6 0 01-4.896-3.912zm.024-7.368c.984-1.944 2.736-3.36 4.896-3.936C9 5.376 8.352 6.744 7.992 8.304h-2.88zM9.072 12c0-.84.048-1.632.168-2.4h5.52c.12.768.168 1.56.168 2.4 0 .84-.048 1.632-.168 2.4H9.24c-.12-.768-.168-1.56-.168-2.4zm.408 3.672h5.04c-.48 1.992-1.368 3.552-2.52 4.176-1.152-.624-2.04-2.184-2.52-4.176zm0-7.368c.48-1.992 1.368-3.552 2.52-4.176 1.152.624 2.04 2.184 2.52 4.176H9.48zm4.512-3.936c2.16.576 3.912 1.992 4.896 3.936h-2.856c-.384-1.56-1.032-2.928-2.04-3.936zm.048 15.216c.984-1.008 1.632-2.376 1.992-3.912h2.856c-1.008 1.896-2.736 3.336-4.848 3.912zm2.232-5.184c.096-.768.144-1.584.144-2.4 0-.816-.048-1.632-.144-2.4h3.144c.24.744.36 1.56.36 2.4 0 .84-.12 1.632-.36 2.4h-3.144z"  /></Svg>;
}

export default GlobeRegular;