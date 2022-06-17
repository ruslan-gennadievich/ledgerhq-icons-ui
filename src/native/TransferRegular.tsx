import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function TransferRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M17.016 12.312l4.344-4.368L17.016 3.6l-.96.984 1.248 1.248c.456.456.936.912 1.416 1.368H3.6v1.488h15.168a81.67 81.67 0 00-1.464 1.368l-1.248 1.272.96.984zM2.64 16.056L6.984 20.4l.96-.984-1.248-1.272c-.456-.432-.936-.912-1.416-1.344H20.4v-1.488H5.256c.48-.456.984-.912 1.44-1.368l1.248-1.296-.96-.96-4.344 4.368z"  /></Svg>;
}

export default TransferRegular;