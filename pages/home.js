// import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

// export async function getStaticProps() {
//   let allPostsData = [];
//   allPostsData = await getSortedPostsData();

//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home({ allPostsData }) {
  // const allPostsData = login;
  console.log(allPostsData);
  return (
    <section>
      {" "}
      <section className={utilStyles.headingMd}>
        <p>Hello, I am a Full Stack Web Developer</p>
        <p>
          <a
            href="https://sardarbilal421.github.io/natours.github.io/"
            className={utilStyles.blackColor}
          >
            My Website
          </a>
        </p>
      </section>
      {/* {console.log(post)} */}
      {/* <section>{post}</section> */}
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
//   );
//   const post = await res.json();
//   //   console.log(post);
//   return {
//     props: {
//       post,
//     },
//   };
// }
