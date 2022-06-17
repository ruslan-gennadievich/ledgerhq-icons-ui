import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function BlockchainUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M3.504 19.224l4.44 2.592L12 19.464l4.056 2.352 4.44-2.592v-5.088L16.824 12l3.672-2.136V4.776l-4.44-2.592L12 4.536 7.944 2.184l-4.44 2.592v5.088L7.176 12l-3.672 2.136v5.088zm.768-.432v-3.84l3.336 1.92v3.84l-3.336-1.92zm0-9.36v-3.84l3.336 1.92v3.84l-3.336-1.92zm.336 4.944l3.384-1.968 3.36 1.944-3.408 1.944-3.336-1.92zm0-9.36l3.336-1.92 3.336 1.92-3.336 1.92-3.336-1.92zM8.28 20.712v-3.84l3.384-1.944v3.816L8.28 20.712zm0-9.288V7.512l3.384-1.944v3.888L8.28 11.424zm.312.576L12 10.032 15.408 12 12 13.968 8.592 12zm3.744 6.744v-3.816l3.384 1.944v3.84l-3.384-1.968zm0-9.288V5.568l3.384 1.944v3.912l-3.384-1.968zm.312 4.896l3.36-1.944 3.384 1.968-3.336 1.92-3.408-1.944zm.072-9.336l3.336-1.92 3.336 1.92-3.336 1.92-3.336-1.92zm3.672 15.696v-3.84l3.336-1.92v3.84l-3.336 1.92zm0-9.36v-3.84l3.336-1.92v3.84l-3.336 1.92z"  /></Svg>;
}

export default BlockchainUltraLight;