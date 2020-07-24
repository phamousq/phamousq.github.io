import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Button } from "@material-ui/core";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`About Me!`} description="wef">
      <div className={styles.container}>
        <img
          src={"../img/photo.jpg"}
          alt="me"
          style={{ resizeMode: "contain", height: 300, width: 300 }}
        />
        <div className={styles.hello}>
          <p>
            Hey! My name is Quinton and I'm a rising Senior at the University of
            Texas at Austin studying Biochemistry and some Computer Science. I
            also took an inexuberent amount of time to make this website so I
            hope you enjoy it! This website is aimed at capturing my experiences
            through life thus far and hopefully pass on any knowledge that I
            think was useful to me. The creation of this blog is happening
            amidst the COVID-19 pandemic.
          </p>
          <p>
            not really sure of the theme and things of this site but I figure
            that I have a lot of value to put out into the world and hopefully
            you can find something useful out of it!
          </p>
          <p>
            {" "}
            i hope you enjoy your stay! if you have any feedback please reach
            out to me on any social medial platform of your choice!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
