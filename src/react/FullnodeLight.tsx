import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function FullnodeLight({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 21.24c4.32 0 7.704-1.296 7.704-3.504V6.24c0-2.208-3.264-3.48-7.704-3.48-4.32 0-7.704 1.272-7.704 3.48v11.496c0 2.208 3.312 3.504 7.704 3.504zm-6.504-3.504v-1.992c1.2 1.032 3.6 1.608 6.504 1.608 2.88 0 5.28-.6 6.504-1.608v1.992c0 1.296-2.496 2.304-6.504 2.304-4.056 0-6.504-1.008-6.504-2.304zm0-3.84v-1.968c1.2 1.032 3.6 1.632 6.504 1.632 2.88 0 5.28-.6 6.504-1.632v1.968c0 1.344-2.544 2.376-6.504 2.376-4.032 0-6.504-1.032-6.504-2.376zm0-3.84V8.112c1.2 1.008 3.6 1.584 6.504 1.584 2.856 0 5.28-.576 6.504-1.608v1.968c0 1.368-2.544 2.424-6.504 2.424-4.032 0-6.504-1.056-6.504-2.424zm0-3.816c0-1.296 2.496-2.28 6.504-2.28 4.104 0 6.504.984 6.504 2.28 0 1.368-2.52 2.376-6.504 2.376-4.032 0-6.504-.984-6.504-2.376z"  /></Svg>;
}

export default FullnodeLight;