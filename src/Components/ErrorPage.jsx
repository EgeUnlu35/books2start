import { NavLink } from "react-router-dom";

function ErrorPage() {
    return (
      <div>
        <NavLink 
          to="/"
          className="text-5xl  mb-10 text-blue-500 font-bold mt-5 cursor-pointer">Books2Start
        </NavLink>
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <h2 className="text-2xl font-medium text-gray-600">Page Not Found</h2>
        </div>
      </div>
    );
  }
  
  export default ErrorPage;