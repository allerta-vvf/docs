import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_profile_details.svg').default,
    description: (
      <>
        AllertaVVF was designed from the ground up to be easy
        to use and customize for your needs.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_filing_system.svg').default,
    description: (
      <>
        You can focus on what matters to you, and let
        AllertaVVF take care of the rest.
      </>
    ),
  },
  {
    title: 'Speed up your organization',
    Svg: require('@site/static/img/undraw_spreadsheets.svg').default,
    description: (
      <>
        Using this software, you can plan and manage
        your and your team's availability, and much more.
        Then you can use different tools to stay in touch with
        your team and to keep track of courses and turntables.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
