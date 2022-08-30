import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <> Welcome to <b>Data Manipulation and Management</b> (CSE314A) and <b>Introduction to Data Wrangling</b> (DCDS510)! </>),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        For brevity, we will simply refer to this course as <b>Data Wrangling</b>. My goal is to equip every student with modern, job-ready data manipulation skills and best practices which will empower you to handle your future data wrangling needs  effectively and confidently across many domains. Join the class discussion on <a href='https://piazza.com/wustl/fall2022/cse314adcds510/home'>Piazza</a> or check out our <a href='resources'>Resources</a> page to get started with course concepts. Yee-Haw! <h4>- Professor Schlichenmeyer</h4>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
