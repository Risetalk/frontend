import Head from 'next/head';

import Layout from '@/hocs/Layout';

const SeoList = {
  title: 'Risetalk Marketplace - Buy and Sell NFTs on Our Revolutionary Platform',
  description:
    'Discover the ultimate NFT marketplace on Risetalk, where you can buy, sell, and trade your favorite digital assets. Our revolutionary platform combines the best of Opensea, Rarible, and SuperRare, using ERC1155 to provide a seamless and secure experience for buyers and sellers alike.',
  href: '/',
  url: 'https://risetalk.com',
  keywords: 'trade nfts, risetalk trade nft, risetalk marketplace',
  robots: 'all',
  author: 'Risetalk',
  publisher: 'Risetalk',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  video: 'https://risetalkcourses.s3.us-east-2.amazonaws.com/Quack+Sound+Effect.mp4',

  twitterHandle: '@risetalk_',
};

export default function Marketplace() {
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

        <meta property="fb:app_id" content="555171873348164" />

        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Marketplace
    </div>
  );
}

Marketplace.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
