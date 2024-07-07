import MainPage from './Components/MainPage'
import Category from './Components/Category'
import ErrorPage from './Components/ErrorPage'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import classic_books from './Constants/ClassicBooks'
import cooking_books from './Constants/CookingBooks'
import history_books from './Constants/HistoryBooks'
import romance_books from './Constants/RomanceBooks'
import science_books from './Constants/ScienceBooks'
import fiction_books from './Constants/FictionBoooks'
import self_development_books from './Constants/SelfDevelopmentBooks'
import philosophy_books from './Constants/PhilosophyBooks'
import travel_books from './Constants/TravelBooks'
import crime_and_thriller_books from './Constants/CrimeAndThrillerBooks'
import business_books from './Constants/BusinessBooks'
import scifi_books from './Constants/ScifiBooks'




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/category/classics',
    element: <Category bookData = {classic_books} category="Classic"/>
  },
  {
    path: '/category/history',
    element: <Category bookData = {history_books} category="History"/>
  },
  {
    path: '/category/fiction',
    element: <Category bookData = {fiction_books} category="Fiction"/>
  },
  {
    path: '/category/self-development',
    element: <Category bookData = {self_development_books} category="Self Development"/>
  },
  {
    path: '/category/philosophy',
    element: <Category bookData = {philosophy_books} category="Philosophy"/>
  },
  {
    path: '/category/romance',
    element: <Category bookData = {romance_books} category="Romance"/>
  },
  {
    path: '/category/travel',
    element: <Category bookData = {travel_books} category="Travel"/>
  },
  {
    path: '/category/cooking',
    element: <Category bookData = {cooking_books} category="Cooking"/>
  },
  {
    path: '/category/science',
    element: <Category bookData = {science_books} category="Science"/>
  },
  {
    path: '/category/crime-and-thriller',
    element: <Category bookData = {crime_and_thriller_books} category="Crime and Thriller"/>
  },
  {
    path: '/category/business-books',
    element: <Category bookData = {business_books} category="Business & Economic"/>
  },
  {
    path: '/category/sci-fi',
    element: <Category bookData = {scifi_books} category="Sci-fi"/>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
