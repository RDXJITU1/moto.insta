import Home from "./pages/Home"
import Login from "./pages/Login"
import Tool from "./pages/Tool"
import Profile from "./profile/profile"
import ViewTab from "./pages/ViewTab"
import {Routes,Route} from 'react-router-dom'
function App() {

const user = [
  { id:1, name:"Jitendra", photo:"./my.png" },
   { id:2, name:"Prakas", photo:"./Cph1.jpg"},
    { id:3, name:"M kartik", photo:"./ph2.jpg"},
     { id:4, name:"Chandan", photo:"./ph3.jpg"},
      { id:5, name:"Satyajeet", photo:"./ph4.jpg"},
       { id:6, name:"Sarat ", photo:"./ph5.jpg"},
        { id:7, name:"Rupali", photo:"./Cph1.jpg"},
         { id:8, name:"Keshab", photo:"./ph2.jpg"},
         { id:10, name:"Manas ", photo:"./ph3.jpg"},
          { id:11, name:"Karishma ", photo:"./ph4.jpg"},
       { id:12, name:"Priti", photo:"./ph5.jpg"},
        { id:13, name:"Sashi", photo:"./ph2.jpg"},
         { id:14, name:"Narendra ", photo:"./ph5.jpg"},
         { id:15, name:"Niranajan ", photo:"./Cph1.jpg"},
            { id:16, name:" Keshab", photo:"./ph5.jpg"},
       { id:17, name:"kabyaa", photo:"./ph2.jpg"},
        { id:18, name:"Bijay  ", photo:"./ph4.jpg"},
         { id:19, name:"Karunakar", photo:"./ph3.jpg"},
         { id:20, name:"jitu", photo:"./ph5.jpg"}
 
]






  return (
    <>
  <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home moto={user} />}/>
          <Route path="/tool" element={<Tool moto={user} />}/>
          <Route path ="/profile" element = {<Profile/>}/>
          <Route path ="/view" element = {<ViewTab/>}/>

  </Routes>
  
  
   
    </>
  )
}

export default App
