/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import type { NextPage } from 'next';
import Head from 'next/head';
import { HomepageLayut } from '../layouts';

const Home: NextPage = () => {
  console.log('Hello world');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageLayut />
    </div>
  );
};

export default Home;
