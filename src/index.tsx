import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Todo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layouts';

const todos: Todo[] = [
  {
    id: 0,
    text: 'Первое задание',
    isDone: false,
  },
  {
    id: 1,
    text: 'Второе задание',
    isDone: false,
  },
  {
    id: 2,
    text: 'Третье задание',
    isDone: false,
  },
  {
    id: 3,
    text: 'Четвертое задание',
    isDone: false,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />,
      },
      {
        path: '/todo',
        element: <ToDoListPage />,
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
], { basename: '/app/' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
