//import { readFile } from 'fs/promises';
import Head from 'next/head';
import { getPost } from '../..lib/posts';
// async function getPost(slug) {
//   const data = await readFile(`'content/posts/${slug}.json`, 'utf8');
//   return JSON.parse(data);
// }
export async function getStaticProps() {
  console.log('[FirstPostPage] getStaticProps ()');
  const post = await getPost('first-post');
  return {
    props: {
      post,
    },
  };
}
function FirstPostPage({ post }) {
  console.log('[FirstPostPage] render:', post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export default FirstPostPage;
