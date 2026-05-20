import { Link } from "react-router-dom"
import { useState } from "react"
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiPlay1 } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { PiSignpost } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";




import './Setting.css'
import Profile from "./Profile";

function Setting({ insta }) {
   const [like, setLike] = useState(false)
   const jitu = () => {
   setLike(!like)
  }

  return (
    <div>


      <div className="flex gap-6 md:gap-10 lg:gap-30">

        <div className="sticky top-0 h-[200px] md:h-[300px] md:gap-6 lg:gap-10 lg:h-[350px] mt-[80px] w-[20px]  text-[10px]  md:w-[65px] md:text-[15px]  lg:w-[80px] lg:text-[18px]   bg-pink-400 flex flex-col items-center gap-5 p-4 rounded-lg">
        <Link to="/tool"> <IoMdSettings/> </Link> 
          <Link to="/tool"><FaHeart/></Link>
          <Link to="/tool"><PiSignpost/></Link>
          <Link to="/tool"> <CiPlay1/> </Link>
          <Link to="/tool"><CiSquarePlus/></Link>
          <Link to = "./#"> <CgProfile/> </Link>
        </div>
        {/* ended the nav */}

        {/* post start */} 
        <div>  
          {insta.map((profiles) => {
            return (
              <div key={profiles.id} className="bg-yellow-400 lg:ml-[200px] rounded ">
                {/* name */}
                {/* logo and name */}
                <div className="flex gap-2">
                          <div style={{border:"1px solid red", borderRadius:"50%"}} className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] overflow-hidden ">  
                                    {<img className="w-full h-full object-cover " src={profiles.profilePhoto}/>}
                          </div>
                          <div className="text-[10px] md:text-[15px] lg:text-[20px] ">
                            <Link to="/profile">{profiles.id_name}</Link>   
                          </div>

                </div>
                <div>
                  {<img  className="w-[200px] h-[250px] md:w-[400px] md:h-[450px] lg:w-[650px] lg:h-[680px]" src={profiles.post} />}
                </div>
                {/* icons */}
                <div className="flex gap-3 m-2">
                 <div>
                        <button  onClick={jitu} > {like  ?  profiles.islikeIcon : profiles.noLike  } </button>      
                 </div>
                 <div> 

                  {profiles.shere}  
                  </div>
                 <div>
                 <a href={profiles.post} download > {profiles.save} </a> 
                    </div>


                </div>
              </div>
          

         )})}


        </div>





        {/* post part ended */}

      </div>
    </div>



  )
}

export default Setting
