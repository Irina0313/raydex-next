"use client";

import { Button } from "antd";
import { useState } from "react";

interface ICustomButtonProps {
  text: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
}

const CustomButton = ({ text, htmlType }: ICustomButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? "#5085ba" : "#2e69ad",
    borderRadius: "8px",
    borderColor: "#5085ba",
  };

  const hoverHandler = () => {
    setHovered(!hovered);
  };

  return (
    <Button
      type="primary"
      htmlType={htmlType || undefined}
      style={buttonStyle}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
