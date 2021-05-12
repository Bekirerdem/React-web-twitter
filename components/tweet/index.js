import React from "react";
// import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

import styles from "./style.module.css";

import Photo from "../photo";

function Tweet({ name, slug, children }) {
  return (
    <article className={styles.tweet}>
      {/* Avatar */}
      <div className={styles.avatar}>
        <Photo />
      </div>
      {/* Body */}
      <div className={styles.body}>
        <header className={styles.header}>
          {name} @{slug} · 15 Hours
        </header>

        <div className={styles.content}>{children}</div>

        <footer className={styles.footer}>Footer</footer>
      </div>
    </article>
  );
}

export default Tweet;
