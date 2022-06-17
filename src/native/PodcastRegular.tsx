import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PodcastRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 14.813a3.15 3.15 0 01-2.253-.96 3.318 3.318 0 01-.934-2.312V6.083c0-.867.336-1.698.934-2.311A3.15 3.15 0 0112 2.812a3.15 3.15 0 012.253.96c.597.613.934 1.444.934 2.311v5.458a3.319 3.319 0 01-.934 2.312 3.15 3.15 0 01-2.253.96zM12 4.38c-.44 0-.863.18-1.174.5-.31.319-.486.752-.486 1.203v5.458c0 .452.175.885.486 1.205.311.32.733.499 1.174.5.44-.001.862-.18 1.173-.5.312-.32.487-.753.487-1.205V6.083c0-.451-.175-.884-.487-1.204-.311-.32-.733-.499-1.173-.5z"  /><Path d="M12 17.813a6.195 6.195 0 01-6.188-6.188H7.37a4.636 4.636 0 004.63 4.631 4.637 4.637 0 004.632-4.631h1.556A6.194 6.194 0 0112 17.813z"  /><Path d="M12.75 17.063h-1.5v3h1.5v-3z"  /><Path d="M14.438 19.688H9.561v1.5h4.876v-1.5z"  /></Svg>;
}

export default PodcastRegular;