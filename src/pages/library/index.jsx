import Head from 'next/head';
import Layout from '@/hocs/Layout';

const SeoList = {
  title: 'Library - My Courses, Products, Wishlist & Orders | Risetalk NFT Marketplace',
  description:
    'Discover all your courses, products, wishlist and orders in one place on Risetalk, the ultimate NFT marketplace for online courses, physical products, and more. Explore our revolutionary platform that uses ERC1155 to provide a seamless and secure buying and selling experience.',
  href: '/',
  url: 'https://risetalk.com/library',
  keywords:
    'risetalk library, risetalk courses, risetalk products, risetalk wishlist, risetalk orders',
  robots: 'all',
  author: 'Risetalk',
  publisher: 'Risetalk',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  twitterHandle: '@Risetalk',
};

export default function Library() {
  return (
    <>
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
      <p>Library</p>
    </>
  );
}

Library.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
