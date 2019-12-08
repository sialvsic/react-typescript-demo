import React from "react";
import Button from "antd/es/button";
import "antd/es/button/style/css"; //

interface Props {
  name: string;
  click: () => void
}

//函数组件的TS声明
const HelloButton = (props: Props) => {
  return <Button onClick={props.click}>this is {props.name}</Button>;
};

HelloButton.defaultProps = {
  name: "default name"
};

export default HelloButton;
