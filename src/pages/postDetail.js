import { useLoaderData } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import NewsletterSignup from '../components/NewsLetterSignup';
// import { getPost } from '../util/api';

function PostDetailPage() {
  const postData = useLoaderData();
  console.log(postData);

  return (
    <>
      <BlogPost title={postData.data.title} text={postData.data.body} />
      <NewsletterSignup />
    </>
  );
}

export default PostDetailPage;

// export function loader({ params }) {
//   const postId = params.id;

//   return getPost(postId);
// }