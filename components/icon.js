import React from "react";
import cn from 'classnames'

import styles from "../components/button.module.css";

import Button from '../components/button'

function IconButton({ children, className, ...props }) {
  return (
    <Button
      className={cn(styles.iconButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export default IconButton
