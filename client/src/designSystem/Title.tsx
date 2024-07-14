import React from "react";
import classNames from "classnames";

interface TitleProps {
  text: string;
  size?:
    | "small"
    | "medium"
    | "large"
    | "extraLarge"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl";
  color?: string;
  margin?: string;
  padding?: string;
  textAlign?: "left" | "center" | "right";
  fontWeight?: "normal" | "bold" | "bolder";
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  text,
  size = "medium",
  color = "black",
  margin = "m-0",
  padding = "p-0",
  textAlign = "left",
  fontWeight = "normal",
  className = "",
}) => {
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
    extraLarge: "text-3xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  return (
    <h1
      className={classNames(
        sizeClasses[size],
        `text-${color}`,
        margin,
        padding,
        `text-${textAlign}`,
        `font-${fontWeight}`,
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Title;
