import classic_books from "../Constants/ClassicBooks";
import { lazy, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Category({bookData , category}){

    const [count ,setCount] = useState(0)

    const books = bookData

    const index = books.at(count)
    const categoryName = category
    const bookName = index.name
    const author = index.author
    const score = index.score
    const release = index.release
    const summary = index.summary
    const image = index.image

    function NextBook(){
        if(count < books.length-1)
        setCount(count+1)
    }

    function PreviousBook(){
        if(count>0){
            setCount(count-1)
        }
    }
    function PreviousButton(){
        if (count > 0){
            return(<button 
            className="w-48 bg-blue-500 drop-shadow-md
            text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
            onClick={PreviousBook}
            >Previous Book</button>)
        }
    }
    function PreviousButton(){
        if (count > 0){
            return(<button 
            className="btn drop-shadow-md w-48"
            onClick={PreviousBook}
            >Previous Book</button>)
        }
    }
    function NextButton(){
        if (count <= books.length-2){
            return(<button 
            className="w-48 bg-green-500 drop-shadow-md
            text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            onClick={NextBook}
            >Next Book</button>)
        }
        
    }
    function NextButton(){
        if (count <= books.length-2){
            return(<button 
            className="btn drop-shadow-md w-48 "
            onClick={NextBook}
            >Next Book</button>)
        }
        
    }

    

    return(
        
        <div className="max-w-3xl mx-auto">
            <NavLink 
                to="/"
                className="text-5xl  mb-10 text-blue-500 font-bold mt-5 cursor-pointer drop-shadow-md">Books2Start
            </NavLink>
            <div>
                <h1 className="text-5xl text-gray-800 font-semibold m-10">
                    Best <span className="text-yellow-500 italic">{categoryName}</span> books to start reading
                </h1> {/* Adjusted line */}
            </div>
            <div className="flex space-x-4"> {/* Adjusted line */}
                <div>
                    <img loading="lazy" src={image} className="w-80 h-96  rounded-lg drop-shadow-md"/>
                </div>
                <div className="text-left w-3/4 ">
                    <h3 className="text-3xl font-bold ml-2">{bookName}</h3>
                    <div className="flex ml-2">
                        <p className="text-lg text-gray-800 "> {author}</p>
                    </div>
                    <div className="flex mt-2">
                        <p className="text-lg text-gray-700  pl-2 font-semibold">{score}/5</p>
                        <span className="text-lg text-gray-800 mx-2 ml-4">•</span> {/* Added dot between author and release */}
                        <p className="text-lg text-gray-700  pl-2 font-semibold">{release}</p>
                    </div>
                    <p className="text-lg text-gray-600 m-2 mt-3 font-semibold w-128">{summary}</p>
                </div>
            </div>
            <div className=" flex justify-between space-x-4 mt-8 "> {/* Added space-x-4 for spacing between buttons */}
                <PreviousButton />
                <div className="flex-grow text-right">
                    <NextButton />
                </div>
            </div>
            <div>
            <h3 className="bg-blue-200 rounded-lg mt-8  p-4 pl-12 pr-12 text-lg font-semibold text-gray-800 leading-relaxed">
                Books2Start is a website for helping people who want to start reading but don't know where. Made by   
                <a className=" pl-1" href="https://x.com/egeunluu" target="_blank" rel="noopener noreferrer"> 
                 Ege <img src="https://pbs.twimg.com/profile_images/1809922217410498561/5sf_-W_X_400x400.jpg" className="inline-block h-5 w-5 align-middle rounded-full"/>
                </a>
            </h3>
            </div>
        </div>
    )
}

export default Category;