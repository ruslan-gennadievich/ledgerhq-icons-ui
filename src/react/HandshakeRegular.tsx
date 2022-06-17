import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function HandshakeRegular({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M13.608 8.1l-2.448 2.448c-.216.192-.432.312-.696.312a.952.952 0 01-.984-.96c0-.264.12-.552.264-.696l2.496-2.472c.36-.312.816-.504 1.272-.504h1.92c.48 0 .912.192 1.272.504l1.44 1.416c.336.36.792.528 1.248.528h2.928V7.212h-2.736c-.168 0-.312-.048-.408-.168l-1.368-1.32a3.424 3.424 0 00-2.376-.984H8.568c-.864 0-1.752.36-2.376.984l-1.368 1.32c-.096.12-.216.168-.408.168H1.68v1.464h2.928a1.78 1.78 0 001.272-.528l1.44-1.416a1.87 1.87 0 011.248-.504h2.376L8.856 8.292a2.295 2.295 0 00-.648 1.584c0 1.248.984 2.28 2.256 2.28.576 0 1.128-.216 1.56-.648l.528-.528 4.128 4.128-2.208 2.16c-.336.312-.792.528-1.248.528h-3.96c-.456 0-.912-.216-1.224-.528L5.424 14.7c-.36-.312-.792-.504-1.272-.504H1.68v1.464h2.304c.144 0 .288.048.408.168l2.544 2.496a3.502 3.502 0 002.328.936h3.96a3.41 3.41 0 002.328-.96l2.688-2.64h4.08v-1.464h-4.728l-4.128-4.128 1.056-1.056-.912-.912z"  /></Svg>;
}

export default HandshakeRegular;