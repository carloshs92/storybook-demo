import React from "react";
import { Svg } from "./styled";
import iconPaths from "./selection";

interface IProps {
  name: string;
}

const getPath = (iconName: string) => {
  const icon = iconPaths.icons.find(i => i.properties.name === iconName);

  if (icon) {
    return icon.icon.paths.join(" ");
  } else {
    return "";
  }
};

const Icon: React.FC<IProps> = props => {
  const { name } = props;
  const path = getPath(name);

  if (path === "") {
    return null;
  }

  return (
    <Svg data-testid="icon" viewBox="0 0 1024 1024" {...props}>
      <path d={path} />
    </Svg>
  );
};

export default Icon;
