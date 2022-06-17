import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeErrorMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M10.752 20.748h.288l2.04-2.064c-.672.096-1.464.144-2.328.144-3.792 0-5.784-.84-5.784-1.872v-1.248c1.344.768 3.408 1.2 5.784 1.2.48 0 .96-.024 1.416-.048l-.816-.84.84-.84c-.456.024-.936.048-1.44.048-3.744 0-5.784-.888-5.784-1.992v-1.248c1.344.792 3.408 1.224 5.784 1.224 2.352 0 4.416-.432 5.784-1.224V13.5l.888.864 1.032-1.032V5.796c0-2.448-3.336-3.768-7.704-3.768-4.248 0-7.704 1.32-7.704 3.768v11.16c0 2.448 3.384 3.792 7.704 3.792zM4.968 9.516V8.292c1.344.768 3.408 1.2 5.784 1.2 2.328 0 4.416-.432 5.784-1.224v1.248c0 1.104-2.112 2.016-5.784 2.016-3.744 0-5.784-.912-5.784-2.016zm0-3.72c0-1.008 2.064-1.848 5.784-1.848 3.84 0 5.784.816 5.784 1.848 0 1.128-2.112 2.016-5.784 2.016-3.744 0-5.784-.888-5.784-2.016zm8.976 14.88l1.296 1.296 2.208-2.208 2.208 2.208 1.296-1.296-2.208-2.208 2.208-2.208-1.296-1.296-2.208 2.208-2.208-2.208-1.296 1.296 2.208 2.208-2.208 2.208z"  /></Svg>;
}

export default FullnodeErrorMedium;