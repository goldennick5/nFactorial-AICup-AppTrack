import React from "react";
import s from "./container.module.scss";

const Container = (props) => {
  return (
    <div className={s.container}>{props.children}</div>
  );
};

export default Container;
