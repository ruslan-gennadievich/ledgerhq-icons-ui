import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function TrophyLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M6.96 20.4h10.08v-1.152h-4.416V15.96c1.632-.072 2.928-.672 3.864-1.896a4.291 4.291 0 00.864-1.752c1.344-.096 2.352-.672 3.12-1.656.624-.792.888-1.8.888-3.288V4.512h-3.792V3.6H6.432v.912H2.64v2.856c0 1.488.264 2.496.888 3.288.768.984 1.776 1.56 3.144 1.656.168.672.456 1.248.864 1.752.96 1.224 2.208 1.824 3.84 1.896v3.288H6.96V20.4zM3.84 7.896V5.64h2.592v4.44c0 .408.024.768.072 1.08-1.8-.12-2.664-1.224-2.664-3.264zM7.704 10.8V4.728h8.616V10.8c0 2.568-1.104 3.936-3.696 3.936H11.4c-2.544 0-3.696-1.368-3.696-3.936zm9.792.36c.048-.312.072-.672.072-1.08V5.64h2.592v2.256c0 2.424-1.2 3.168-2.664 3.264z"  /></Svg>;
}

export default TrophyLight;