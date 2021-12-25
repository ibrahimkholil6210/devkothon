import Head from "next/head";

const SEO = (props) => {
  return (
    <Head>
      <title>
        {props.title
          ? props.title + " | ডেভকথন - বাংলায় ফুলস্ট্যাক টেকনোলজি"
          : "ডেভকথন - বাংলায় ফুলস্ট্যাক টেকনোলজি"}
      </title>
      <meta
        name="description"
        content={
          props.description
            ? props.description
            : "ফুলস্ট্যাক টেকনোলজির বিভিন্ন বিষয়ে টিউটোরিয়াল নিজ মাতৃভাষায়। বাংলায় সফটওয়্যার ইঞ্জিনিয়ারিং এর বিভিন্ন বিষয় শিখুন এবং ছড়িয়ে দিন সবার মাঝে।"
        }
      />
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:image:secure_url" content="/thumbnail.png" />
      <link rel="shortcut icon" href="/fav.png" />
    </Head>
  );
};

export default SEO;
