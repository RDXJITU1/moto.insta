import { useNavigate } from "react-router-dom"
import Setting from "./Setting";
import './Home.css'
import Posts from "./posts";
import { AiFillLike } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home({ moto }) {

  const [openUser, setOpenUser] = useState(null)

  const profiles = [
    { id: 1, id_name: "the_python_king3", post: "./post.png.jpeg", profilePhoto: "./my.png", islikeIcon: <AiFillLike />, noLike: <GrLike />, shere: <IoIosSend />, save: <MdOutlineSaveAlt /> },
    { id: 2, id_name: "mr_hacker", post: "./post2.png", profilePhoto: "./post.png.jpeg", islikeIcon: <AiFillLike />, noLike: <GrLike />, shere: <IoIosSend />, save: <MdOutlineSaveAlt /> },
    { id: 3, id_name: "the_python_king3", post: "./post.png.jpeg", profilePhoto: "./my.png", islikeIcon: <AiFillLike />, noLike: <GrLike />, shere: <IoIosSend />, save: <MdOutlineSaveAlt /> },
    { id: 4, id_name: "mr_hacker", post: "./post2.png", profilePhoto: "./post.png.jpeg", islikeIcon: <AiFillLike />, noLike: <GrLike />, shere: <IoIosSend />, save: <MdOutlineSaveAlt /> },
     { id: 5, id_name: "Ranshi_9090", post: "./ITI.png", profilePhoto: "./ph5.jpg", islikeIcon: <AiFillLike />, noLike: <GrLike />, shere: <IoIosSend />, save: <MdOutlineSaveAlt /> },
      { id: 6, id_name: "mr_hacker", post: "./Cph1.jpg", profilePhoto: "./post.png.jpeg", islikeIcon: <AiFillLike />, noLike: <GrLike />, shere: <IoIosSend />, save: <MdOutlineSaveAlt /> }




  ]



  // const Navigate = useNavigate();

  //  const remove = () => {
  //    localStorage.removeItem("islogged")
  //    Navigate("/login")
  //  }


  return (
    <>
      <div className="logo">
        <img src="./bg.re.png" alt="header" className=" w-[50px] h-[60px] sm:w-[120px] md:w-[180px] lg:w-[200px] lg:h-[80px]" />




        {/* original */}
        {/* <div>

          <div className="flex overflow-x-auto gap-2 p-2 scrollbar-hide border-b shadow-lg mb-2 ">
            {moto.map((user) => (
              <div key={user.id} className="flex flex-col items-center  min-w-[80px]" >
                <img src={user.photo} alt={user.name} className="w-[80px] h-[80px] rounded-full border-4 border-pink-300  object-cover bg-gray-600" />
                <p> {user.name} </p>



              </div>
            ))}


          </div>

        </div>
         */}
        

{/* try */}

 <div className="flex overflow-x-auto gap-2 p-2 scrollbar-hide border-b shadow-lg mb-2">

        {moto.map((user) => (

          <div
            key={user.id}
            className="flex flex-col items-center min-w-[80px] cursor-pointer"
            onClick={() => setOpenUser(user)}
          >

            <img
              src={user.photo}
              alt={user.name}
              className="w-[80px] h-[80px] rounded-full border-4 border-pink-300 object-cover bg-gray-600"
            />

            <p>{user.name}</p>

          </div>

        ))}

      </div>


      {/* Popup */}
      {openUser && (

        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">

          <div className="relative">

            <img
              src={openUser.photo}
              alt={openUser.name}
              className="w-[300px] h-[300px] rounded-full border-8 border-pink-400 object-cover"
            />

            {/* Close Button */}
            <button
              onClick={() => setOpenUser(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
            >
              X
            </button>

          </div>

        </div>
      )}









       


      </div>
      <Posts />
      <Setting insta={profiles} />



    </>

  )
}

export default Home
