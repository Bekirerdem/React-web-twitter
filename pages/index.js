import React from "react";

import CONST from "../constants";
import Layout from "../components/layout";
import useWindowSize from "../hooks/useWindowSize";
import SideBar from "../components/col-sidebar";
import TimeLine from "../components/col-timeline";
import Extra from "../components/col-extra";

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <SideBar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</SideBar>
      <TimeLine>{JSON.stringify(size)}</TimeLine>
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </Layout>
  );
}

export default HomePage;
