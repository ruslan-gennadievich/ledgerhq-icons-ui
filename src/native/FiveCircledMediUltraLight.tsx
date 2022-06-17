import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledMediUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 16.704c1.92 0 3.144-1.32 3.144-3.096 0-1.8-1.248-3.072-2.976-3.072-.888 0-1.608.36-2.064.96h-.096l.336-3.144h4.296v-.768H9.648l-.48 5.16h.792c.288-.888.936-1.464 2.064-1.464h.048c1.416 0 2.232.84 2.232 2.232v.192c0 1.392-.768 2.232-2.28 2.232h-.048c-1.512 0-2.28-.864-2.304-2.184h-.816c0 1.656 1.224 2.952 3.144 2.952zM5.76 21h12.48v-.84H5.76V21zm0-17.16h12.48V3H5.76v.84z"  /></Svg>;
}

export default FiveCircledMediUltraLight;