import Head from "next/head";

const SEO = (props) => {
  return (
    <Head>
      <title>
        {props.pageData.title
          ? props.pageData.title + " | ডেভকথন - বাংলায় কম্পিউটার সাইন্সের এর সবচেয়ে তথ্য কোষ"
          : "ডেভকথন - বাংলায় কম্পিউটার সাইন্সের এর সবচেয়ে তথ্য কোষ"}
      </title>
      <meta
        name='description'
        content={
          props.pageData.description
            ? props.pageData.description
            : "ডেভকথন একটি কম্পিউটার সাইন্সের তথ্য কোষ। কম্পিউটার সাইন্স একটি বিশাল ডিসিপ্লিন। আমাদের চেষ্টা থাকবে বিষয় ভিত্তিক টিউটোরিয়াল এবং প্রতিদিনের যত কাজের যত ভাল খারাপ অভিজ্ঞতা সবার মাঝে ছড়িয়ে।"
        }
      />
      <meta property='og:image' content={
          props.pageData.cover
            ? props.pageData.cover.url
            : '/thumbnail.png'
        } 
      />
      <meta property='og:image:secure_url' 
        content={
          props.pageData.cover
            ? props.pageData.cover.url
            : '/thumbnail.png'
        }  
      />
      <link rel='shortcut icon' href='/fav.png' />
    </Head>
  );
};

export default SEO;
