import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function GithubMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M9.072 21.08c.384.12.624-.12.624-.433 0-.024-.024-.336-.024-.96-.024-.576-.024-1.032-.024-1.344-.312.096-.696.12-.96.12-.816 0-1.872-.24-2.184-1.248-.384-.623-.72-1.2-1.056-1.392-.528-.383-.48-.6.072-.6l.216.048c.336.072.912.409 1.224.936.312.624.84 1.032 1.656 1.032.312 0 .696-.072 1.08-.192.072-.6.312-1.008.6-1.296-1.032-.095-1.488-.167-2.376-.551a2.229 2.229 0 01-.96-.672c-.456-.553-.888-1.56-.888-3 0-.793.288-1.537.888-2.185-.312-.744-.264-1.608.096-2.568.672-.192 1.848.528 2.592 1.056a7.92 7.92 0 012.376-.36c.816 0 1.632.12 2.4.36l.456-.36c.6-.456 1.656-.816 2.136-.696.36.96.384 1.824.048 2.568.744.768 1.008 1.248 1.008 2.184 0 1.825-.528 3.168-1.92 3.673-.888.384-1.296.408-2.4.552.432.335.624.888.624 1.728v3.167c0 .312.24.552.648.432 3.792-1.248 6.336-4.823 6.336-8.976 0-5.28-4.272-9.216-9.36-9.216-5.04 0-9.36 3.96-9.36 9.216 0 4.153 2.616 7.728 6.432 8.976zm-3.168-5.472c-.024.047 0 .095.12.143.048.049.096.024.144-.047.024-.024 0-.072-.096-.145-.048-.023-.12 0-.168.049zm.384.287c-.024.049-.024.097.048.192.096.049.168.073.192.024.048-.047.048-.12-.024-.192-.072-.048-.168-.072-.216-.024zm.408.48c-.12.024.048.433.216.313.048-.072.048-.144 0-.24-.072-.12-.168-.145-.216-.073zm.432.552c-.072.073-.072.145.072.24.072.12.168.12.24.048.048-.072 0-.143-.072-.264-.096-.096-.168-.12-.24-.024zm.768.649c.12.047.192.023.216-.073.024-.096-.024-.168-.144-.192-.24-.072-.36.216-.072.265zm.6-.024c0 .12.096.168.216.143.144 0 .216-.072.216-.143 0-.096-.096-.145-.24-.12-.12 0-.192.048-.192.12zm.888-.24c-.24.047-.192.36.048.287.24-.072.192-.288-.048-.288z"  /></Svg>;
}

export default GithubMedium;