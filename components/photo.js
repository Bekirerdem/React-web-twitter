import React from "react";
import cn from "classnames";

import styles from "./photo.module.css";

function Photo({
  src = "https://pbs.twimg.com/profile_images/1382194801827778561/_9Nb_tfu_400x400.jpg",
  alt,
  size = 47,
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img
        className={styles.img}
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </div>
  );
}

export default Photo;
