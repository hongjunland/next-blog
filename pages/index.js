import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Let me introduce myself!</p>
        <p>
          My name is Hongjun lee.<br/>
          I'd like to play computer game!
        </p>
      </section>
    </Layout>
  );
}