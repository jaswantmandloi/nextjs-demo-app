import Link from 'next/link'
import { NextSeo } from "next-seo";
import Categories from '../components/Categories/Categories'
import fetch from "isomorphic-unfetch";



const nextProps = {
  title: "Page Meta Title",
  description: "This will be the page meta description",
  canonical: "https://www.canonicalurl.ie/",
  openGraph: {
    url: "https://www.canonicalurl.ie/",
    title: "Open Graph Title",
    description: "Open Graph Description",
    images: [
      {
        url: "https://www.example.ie/og-image-01.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt"
      },
      {
        url: "https://www.example.ie/og-image-02.jpg",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second"
      },
      { url: "https://www.example.ie/og-image-03.jpg" },
      { url: "https://www.example.ie/og-image-04.jpg" }
    ]
  }
};



const Index = (props) =>{
  
  console.log('props', props)

  return (
  <>
    <NextSeo {...nextProps} />
    <Link href="/jsonld">
      <a>JSON-LD</a>
    </Link>{" "}
    <ul>
      <li>
        <Link href="/blog?id=first" as="/blog/first">
          <a>My first blog post</a>
        </Link>
      </li>
      <li>
        <Link href="/blog?id=second" as="/blog/second">
          <a>My second blog post</a>
        </Link>
      </li>
      <li>
        <Link href="/blog?id=last" as="/blog/last">
          <a>My last blog post</a>
        </Link>
      </li>
    </ul>
    <Categories />
  </>
);

  }

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };

};

export default Index
