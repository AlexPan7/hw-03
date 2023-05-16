import { createBrowserRouter } from 'react-router-dom';

import { PublicLayout } from '../layouts';
import { Home, About, Contact, Blog, NotFound, Login, Post } from '../pages'

export const routes = createBrowserRouter ([
 {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/posts/:id',
      element: <Post />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
 }
])