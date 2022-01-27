import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="code on computer screen"
        src="../images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
