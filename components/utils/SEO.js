import Head from "next/head";

const SEO = (props) => {
  return (
    <Head>
      <title>{props.title || "ডেভকথন - বাংলায় কম্পিউটার সাইন্সের এর সবচেয়ে তথ্য কোষ"}</title>
      <meta
        name='description'
        content={
          props.description ||
          "ডেভকথন একটি কম্পিউটার সাইন্সের তথ্য কোষ। কম্পিউটার সাইন্স একটি বিশাল ডিসিপ্লিন। আমাদের চেষ্টা থাকবে বিষয় ভিত্তিক টিউটোরিয়াল এবং প্রতিদিনের যত কাজের যত ভাল খারাপ অভিজ্ঞতা সবার মাঝে ছড়িয়ে।"
        }
      />
    </Head>
  );
};

export default SEO;
