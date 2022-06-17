import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function LanguageMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path fillRule="evenodd" clipRule="evenodd" d="M16.164 15.137l-.279-1.075h-1.232l-.298 1.075h-1.033l1.382-4.79h1.17l1.342 4.79h-1.052zm-.53-2.017l-.354-1.347-.37 1.347h.723z"  /><path fillRule="evenodd" clipRule="evenodd" d="M3.355 10.424L9.11 15.54l-.898-3.707h1.684v5.292h6.03l-.979 3.688 5.698-5.135V8.335h-6.558V3.187H3.355v7.237zm9.538-2.09V4.382H4.55v5.507l2.503 2.225-.357-1.473h3.2v-.901a3.376 3.376 0 01-.915-.309c-.555.325-1.226.489-2.005.489h-.114l.024-1.194c.403.008.76-.04 1.072-.14a2.777 2.777 0 01-.533-1.106l1.17-.24v-.005c.015.064.093.363.342.667.27-.357.403-.774.467-1.103h-2.53V5.604h1.442v-.673h1.194v.673h1.443v1.194h-.339c-.06.419-.2.993-.53 1.537h2.81zm4.584 7.597H11.09V9.529h8.361v5.621l-2.32 2.09.346-1.31z"  /></Svg>;
}

export default LanguageMedium;