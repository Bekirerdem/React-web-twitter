import React from "react";
import cn from "classnames";

import useWindowSize from '../hooks/useWindowSize'
import styles from "./layout.module.css";

import SideBar from './col-sidebar'
import CONST from '../constants'
import TimeLine from './col-timeline'
import Extra from './col-extra'


function Layout({ children }) {
  const size = useWindowSize()

  return (
    <div className={cn(styles.layout)}>

      <SideBar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</SideBar>

      <TimeLine>{children}</TimeLine>

      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}

    </div>
  );
}

export default Layout;
