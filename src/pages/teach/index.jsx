import Head from 'next/head';
import Layout from '@/hocs/Layout';
import { useSelector } from 'react-redux';
import CTA from './components/CTA';
import Header from './components/Header';
import HowToBeginTabs from './components/HowToBeginTabs';

const SeoList = {
  title: 'Teach on Risetalk - The Ultimate NFT Marketplace for Instructors',
  description:
    'Join the Risetalk community of instructors and share your knowledge with the world. Sell your online courses and physical products using ERC1155 on Risetalk, the revolutionary NFT marketplace that combines the best of Opensea, Udemy, Amazon, and Facebook.',
  href: '/',
  url: 'https://risetalk.com',
  keywords: 'teach on risetalk, risetalk become instructor',
  robots: 'all',
  author: 'Risetalk',
  publisher: 'Risetalk',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/friends.png',
  twitterHandle: '@Risetalk',
};

export default function Teach() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const myUser = useSelector((state) => state.auth.user);

  return (
    <div className="dark:bg-dark-bg">
      <Head>
        <title>{SeoList.title}</title>
        <meta name="description" content={SeoList.description} />

        <meta name="keywords" content={SeoList.keywords} />
        <link rel="canonical" href={SeoList.href} />
        <meta name="robots" content={SeoList.robots} />
        <meta name="author" content={SeoList.author} />
        <meta name="publisher" content={SeoList.publisher} />

        {/* Social Media Tags */}
        <meta property="og:title" content={SeoList.title} />
        <meta property="og:description" content={SeoList.description} />
        <meta property="og:url" content={SeoList.url} />
        <meta property="og:image" content={SeoList.image} />
        <meta property="og:image:width" content="1370" />
        <meta property="og:image:height" content="849" />
        <meta property="og:image:alt" content="Risetalk Thumbnail Image" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isAuthenticated={isAuthenticated} myUser={myUser} />
      <HowToBeginTabs />
      <CTA isAuthenticated={isAuthenticated} myUser={myUser} />
    </div>
  );
}

Teach.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
