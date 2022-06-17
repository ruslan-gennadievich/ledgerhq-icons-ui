import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function PodcastMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M9.614 13.739a3.397 3.397 0 004.772 0 3.327 3.327 0 00.989-2.363V6.06c0-.886-.357-1.735-.99-2.361a3.396 3.396 0 00-4.77 0 3.328 3.328 0 00-.99 2.361v5.316c0 .886.356 1.736.99 2.363zm1.308-8.747a1.533 1.533 0 012.156 0 1.509 1.509 0 01.445 1.068v5.316c0 .4-.16.783-.446 1.066a1.532 1.532 0 01-2.153 0 1.502 1.502 0 01-.447-1.066V6.06c0-.4.16-.784.445-1.068z"  /><Path d="M7.627 16.092a6.194 6.194 0 003.436 1.742v1.572h-1.5v1.875h4.874v-1.875h-1.5v-1.572a6.194 6.194 0 005.25-6.115h-1.821A4.372 4.372 0 0112 16.084a4.372 4.372 0 01-4.366-4.365H5.812a6.194 6.194 0 001.815 4.373z"  /></Svg>;
}

export default PodcastMedium;