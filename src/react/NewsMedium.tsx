import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NewsMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.466 9.055h-7.307v1.93h7.307v-1.93zM10.159 12.606h7.307v1.93h-7.307v-1.93z"  /><path fillRule="evenodd" clipRule="evenodd" d="M3.829 20.356c.53.531 1.249.83 1.998.831h12.606c.68 0 1.334-.271 1.815-.754a2.577 2.577 0 00.752-1.82V5.668H18.95V2.813H3v15.54c0 .751.299 1.472.829 2.003zM8.655 7.598v10.754c0 .31-.052.616-.149.905h9.927a.641.641 0 00.642-.644V7.598H8.655zm-2.82 11.659a.902.902 0 00.895-.905V5.668h10.296v-.925h-12.1v13.61a.906.906 0 00.901.904h.007z"  /></Svg>;
}

export default NewsMedium;