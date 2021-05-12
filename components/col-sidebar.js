import React from "react";
import cn from "classnames";

import styles from "./col-sidebar.module.css";

import Navigation from "./navigation";
import ThemeButton from "./theme-button";
import ProfileBox from "./profile-box";
import * as Icon from "./icons";

function SideBar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? <Icon.Frame/> : "Tweet"}
        </ThemeButton>
      </div>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default SideBar;
