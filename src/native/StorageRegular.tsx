import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function StorageRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M11.988 21.192c5.16 0 9.192-1.68 9.192-4.416v-9.6c0-2.712-3.888-4.368-9.192-4.368-5.136 0-9.168 1.656-9.168 4.368v9.6c0 2.736 3.936 4.416 9.168 4.416zM4.38 16.776V14.52c1.512 1.2 4.296 1.896 7.608 1.896 3.288 0 6.072-.72 7.632-1.92v2.28c0 1.68-2.928 2.928-7.632 2.928-4.776 0-7.608-1.248-7.608-2.928zm0-4.728v-2.4c1.512 1.2 4.296 1.896 7.608 1.896 3.288 0 6.072-.696 7.632-1.896v2.4c-.024 1.608-2.952 2.88-7.632 2.88-4.752 0-7.608-1.272-7.608-2.88zm0-4.872c0-1.656 2.928-2.88 7.608-2.88 4.848 0 7.632 1.2 7.632 2.88-.024 1.632-2.952 2.88-7.632 2.88-4.752 0-7.608-1.248-7.608-2.88z"  /></Svg>;
}

export default StorageRegular;