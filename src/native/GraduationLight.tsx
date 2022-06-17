import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function GraduationLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M5.553 9.288L1.01 7.494l10.993-4.306L22.99 7.492l-4.338 1.73v6.264l1.743 2.208-2.108 3.119-2.145-3.12 1.557-1.937v-1.589l-5.697 2.13-6.449-2.427V9.288zm.952.376l5.549 2.19 5.618-2.24v3.547l-5.668 2.12-5.499-2.07V9.664zm10.217-.698l-4.67 1.865-8.44-3.333 8.391-3.288L20.4 7.498l-2.325.928-5.804-2.004-.31.9 4.76 1.644zm.606 8.772l.952 1.386.938-1.386-.938-1.185-.952 1.185z"  /></Svg>;
}

export default GraduationLight;