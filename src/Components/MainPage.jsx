import { NavLink } from "react-router-dom";

function MainPage(){

    const buttonStyle = "bg-blue-500 cursor-pointer hover:bg-blue-400 text-white font-bold py-5 px-6 rounded text-center m-3 text-lg flex-1 ";

    return(
        <div className="w-3/4 mx-auto text-center  justify-center items-center ">
            <NavLink 
                to="/"
                className="text-5xl  mb-10 text-blue-500 font-bold mt-5 cursor-pointer">Books2Start
            </NavLink>
            <h1 className="text-6xl text-center font-bold my-8 text-blue-600 w-3/4 mx-auto">Find the 
                <span className="text-yellow-500 italic"> best </span> books for you to start reading!
            </h1>            
            <h3 className="text-xl text-center font-semibold my-4">Choose your category</h3>
            <div className="flex flex-col p-4 max-w-4xl mx-auto">
            {/* Row 1 */}
                <div className="flex flex-row justify-center">
                    <NavLink to={`/category/classics`} className={buttonStyle}>
                        <h2>Classic</h2>
                    </NavLink>
                    <NavLink to="category/romance" className={buttonStyle}>
                        <h2>Romance</h2>
                    </NavLink>
                
                    <NavLink to={`/category/history`} className={buttonStyle}>
                        <h2>History</h2>
                    </NavLink>
                    
                </div>
                {/* Row 2 */}
                <div className="flex flex-row">
                    <NavLink to="category/self-development" className={buttonStyle}>
                        <h2>Self Development </h2>
                    </NavLink>
                    <NavLink to="category/philosophy" className={buttonStyle}>
                        <h2>Philosophy</h2>
                    </NavLink>
                    <NavLink to={`/category/fiction`} className={buttonStyle}>
                        <h2>Fiction</h2>
                    </NavLink>
                </div>
                {/* Row 3 */}
                <div className="flex flex-row">
                    <NavLink to="/category/travel" className={buttonStyle}>
                        <h2>Travel </h2>
                    </NavLink>
                    <NavLink to="/category/cooking" className={buttonStyle}>
                        <h2>Cooking</h2>
                    </NavLink>
                    <NavLink to="/category/science" className={buttonStyle}>
                        <h2>Science</h2>
                    </NavLink>
                </div>
                {/* Row 4 */}
                <div className="flex flex-row">
                    <NavLink to="/category/crime-and-thriller" className={buttonStyle}>
                        <h2>Crime and Thriller</h2>
                    </NavLink>
                    <NavLink to="/category/business-books" className={buttonStyle}>
                        <h2>Business & Economic</h2>
                    </NavLink>
                    <NavLink to="/category/sci-fi" className={buttonStyle}>
                        <h2>Sci-fi</h2>
                    </NavLink>
                </div>
                <div className="m-3">
                    <h3 className="bg-blue-200 rounded-lg mt-8  p-4 pl-12 pr-12 text-lg font-semibold text-gray-800 leading-relaxed">
                        Books2Start is a website for helping people who want to start reading but don't know where. Made by   
                            <a className="underline pl-1" href="https://x.com/egeunluu" target="_blank" rel="noopener noreferrer"> 
                                Ege <img src="https://pbs.twimg.com/profile_images/1809922217410498561/5sf_-W_X_400x400.jpg" 
                                    className="inline-block h-6 w-6 align-middle rounded-full"
                                    />
                            </a>
                    </h3>
                </div>
            </div>
        <div>
    </div>
    
    </div>
    );
}

export default MainPage;