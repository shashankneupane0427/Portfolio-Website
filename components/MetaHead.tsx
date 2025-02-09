import Head from 'next/head';

const MetaHead = ({
  title,
  ogtitle,
  description,
  image,
  url,
  typeOfContent,
}: {
  title: string;
  ogtitle: string;
  description: string;
  image: string;
  url: string;
  typeOfContent: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content="Shashank Neupane" />
      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="Surya Shashank Neupane software developer freelancer designer react nodejs javascript programming web portfolio blog Kathmandu Nepal"
      ></meta>
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={ogtitle} />
      <meta property="og:type" content={typeOfContent} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@samip4sure" />
      <meta property="twitter:creator" content="@samip4sure" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

MetaHead.defaultProps = {
  title: 'Shashank Neupane',
  ogtitle: 'Surya Shashank Neupane',
  description:
    "Hey, I'm Shashank. A Full-Stack Web Developer from Nepal. I work with JavaScript, TypeScript, React, Node.js & MongoDB.",
  image: "https://suryashashank.com.np/favicon.ico",
  url: 'https://suryashashank.com.np',
  typeOfContent: 'website',
};

export default MetaHead;
