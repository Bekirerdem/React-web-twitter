import React from "react";

import Layout from "../components/layout";
import Tweet from "../components/tweet/index";

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Bekir Erdem"
        slug="l3ekirerdem"
        text={`belki bir gün dans ederiz marsta`}
      />
      <Tweet
        name="Bekir Erdem"
        slug="l3ekirerdem"
        text={`En son yaprak kalana kadar ölmezmiş ağaç on üç yapraktan ilki düştü yere, 
ayağa kalkmak için.`}
      />
    </Layout>
  );
}

export default HomePage;
