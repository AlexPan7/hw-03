import { createBrowserRouter } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import { PublicLayout } from '../layouts';
import { Home, About, Contact, Blog, NotFound, Login, Registration, Profile, Post } from '../pages'

export const routes = createBrowserRouter ([
 {
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
      path: '/posts/:id',
      element: <Post />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
 },
 {
  element: <AuthRoute redirectPath={'/profile'} />,
  children: [
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/registration',
          element: <Registration />
        },
      ]
    }
  ]
  },
  {
    element: <PrivateRoute redirectPath={'/'} />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            path: '/profile',
            element: <Profile />
          }
        ]
      }
    ]
  },
])