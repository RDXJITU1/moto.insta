import { replace, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import './Login.css'

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [passWord, setPassword] = useState("");
    const [sms, setSms] = useState("")

    function submitHandler(e) {
        e.preventDefault();

    }

//   useEffect(() => {
//      if (localStorage.getItem("islogged"))
//          navigate("/home")
//  })

    function add() {
        if (user == "Jitendra" && passWord == "12345") {
            localStorage.setItem("islogged", "true");
            navigate("/home")
        } else {
            setSms("user Not Found")
        }
    }

    return (

        // <div>
        //     <div className=" flex flex-col justify-center items-center">
        //         <div className="  w-96 h-96 mt-[50px] bg-sky-400 border flex justify-center items-center">

        //             <div>
        //                 <img src="./logo1.png" />
        //             </div>
        //             <div>
        //                 <form onSubmit={submitHandler}>

        //                     <input className="user border m-2 rounded " type="text" placeholder="enter userName" value={user} onChange={(e) => setUser(e.target.value)} /><br />
        //                     <input className="pass border m-2 rounded" type="password" placeholder="enter Password" value={passWord} onChange={(e) => setPassword(e.target.value)} /><br />
        //                     <button className="ml-20 mt-2 border w-[50px] p-[5px]" onClick={add}> Login </button>
        //                 </form>
        //             </div>

        //             {sms && <p className="text-red-400"> {sms} </p>}
        //         </div>
        //     </div>

        // </div>
<div>

  <div className=" login-first flex flex-col justify-center items-center h-screen  ">

    
    <div className="login w-96 h-96 mt-[200px]  flex flex-col justify-center items-center rounded-lg shadow-lg">

      <img src="./logo1.png" alt="logo" className="w-40 mb-4" />

      <form onSubmit={submitHandler} className="flex flex-col items-center">

        <input
          className="border m-2 rounded p-2 text-white"
          type="text"
          placeholder="enter userName"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          className="border m-2 rounded p-2 text-white"
          type="password"
          placeholder="enter Password"
          value={passWord}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={add}
          className="mt-3 bg-green-400 border px-4 py-1 rounded  hover:bg-gray-200 hover:scale-90 transition-transform duration-300"
        >
          Login
        </button>

      </form>

      {sms && <p className="text-red-500 mt-2">{sms}</p>}

    </div>

  </div>
</div>

    )
}

export default Login