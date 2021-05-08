import React from "react";
import cn from "classnames";

import styles from "./profile-box.module.css";

import Photo from "./photo";
import { Details } from "./icons";
import Button from "./button";
import TextBody from "./text-body";

function ProfileBox({
  flat = false,
  name = "Bekir Erdem",
  slug = "l3ekirerdem",
}) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <Details className={styles.icon} />
        </>
      )}
    </Button>
  );
}

export default ProfileBox;
