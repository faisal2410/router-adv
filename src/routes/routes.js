import { createBrowserRouter } from "react-router-dom";
import BlogLayout from '../layout/blogLayout';
import BlogPostsPage from '../pages/blogPosts';
import DeferredBlogPostsPage from '../pages/defferedBlogPosts';
import ErrorPage from '../pages/error';
import NewPostPage from '../pages/newPost';
import { action as newsletterAction } from '../pages/newsLetter';
import PostDetailPage from '../pages/postDetail';
import RootLayout from '../layout/rootLayout';
import WelcomePage from '../pages/welcome';
import {deferredBlogPostsLoader,postsLoader,postDetailLoader} from "../loaders/blogLoader";
import {newPostAction} from "../actions/blogAction";


export const router=createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <WelcomePage /> },
          {
            path: '/blog',
            element: <BlogLayout />,
            children: [
              {
                index: true,
                element: <DeferredBlogPostsPage />,
                loader: deferredBlogPostsLoader,
              },
              {
                path: ':id',
                element: <PostDetailPage />,
                loader: postDetailLoader,
              },
            ],
          },
          {
            path: '/blog/new',
            element: <NewPostPage />,
            action: newPostAction,
          },
        ],
      },
      {
        path: '/newsletter',
        action: newsletterAction,
        element:<h1>Hello news letter</h1>
      },
])