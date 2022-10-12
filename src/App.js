import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';



import Main from './layouts/Main';
import Topics from './components/Topics/Topics'
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Questions from './components/Questions/Questions';
import Options from './components/Options/Options';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
            // console.log(params.topicId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Questions></Questions>
        },
        {
          path: '/options',
          element: <Options></Options>
        },
      ]
    },
    {
      path: '*',
      element: <div className='text-4xl mt-20 font-bold'>This route not found- Error: 404</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
