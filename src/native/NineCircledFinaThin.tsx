import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NineCircledFinaThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M11.064 16.704c2.16 0 3.408-1.872 3.384-4.8-.024-2.856-1.248-4.56-3.336-4.56-1.752 0-3 1.32-3 3.096s1.248 3.096 3 3.096c1.416 0 2.472-.864 2.808-2.136h.024c.12 2.52-.408 4.824-2.88 4.824-1.392 0-2.232-.768-2.448-2.184h-.48c.216 1.608 1.344 2.664 2.928 2.664zM4.032 20.88h7.056c4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88H4.032v.48h7.056c4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4H4.032v.48zm4.56-10.416v-.048c0-1.56.96-2.592 2.496-2.592h.048c1.608 0 2.52 1.176 2.52 2.592v.048c0 1.536-.936 2.592-2.52 2.592h-.048c-1.536 0-2.496-1.032-2.496-2.592z"  /></Svg>;
}

export default NineCircledFinaThin;