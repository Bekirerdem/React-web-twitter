import React from "react";
import cn from "classnames";

import styles from "./col-timeline.module.css";

function TimeLine({ children }) {
  return <div className={cn(styles.timeline)}>{children}</div>;
}

export default TimeLine;
