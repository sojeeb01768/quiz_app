import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics'
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Questions from './components/Questions/Questions';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path:'/topics',
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/topic/:topicId',
          loader: async ({params}) => {
              // console.log(params.topicId);
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <Questions></Questions>
        }
      ]
    },
    {
      path:'*',
      element: <div>This route not found 404</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
