import React from 'react'
import {Bookmark} from "lucide-react"
import Jobcard from './components/Jobcard'
const App = (prop) => {
  
  const User_data = [
  {
    c_name: "Amazon",
    j_type: "Software Engineer",
    img: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    time: "4 days ago",
    type: "Full Time",
    level: "Intermediate",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    c_name: "Google",
    j_type: "Frontend Developer",
    img: "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
    time: "2 days ago",
    type: "Full Time",
    level: "Junior",
    pay: "$110/hr",
    location: "Bangalore, India"
  },
  {
    c_name: "Microsoft",
    j_type: "Backend Developer",
    img: "https://images.seeklogo.com/logo-png/16/2/microsoft-logo-png_seeklogo-168319.png",
    time: "1 week ago",
    type: "Full Time",
    level: "Senior",
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    c_name: "Netflix",
    j_type: "UI/UX Designer",
    img: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
    time: "3 days ago",
    type: "Contract",
    level: "Intermediate",
    pay: "$100/hr",
    location: "Remote"
  },
  {
    c_name: "Meta",
    j_type: "React Developer",
    img: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    time: "5 days ago",
    type: "Full Time",
    level: "Intermediate",
    pay: "$130/hr",
    location: "Gurgaon, India"
  },
  {
    c_name: "Tesla",
    j_type: "Software Engineer",
    img: "https://1000logos.net/wp-content/uploads/2021/04/Tesla-logo.png",
    time: "2 weeks ago",
    type: "Full Time",
    level: "Senior",
    pay: "$150/hr",
    location: "Pune, India"
  },
  {
    c_name: "Adobe",
    j_type: "Full Stack Developer",
    img: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    time: "6 days ago",
    type: "Full Time",
    level: "Intermediate",
    pay: "$125/hr",
    location: "Noida, India"
  },
  {
    c_name: "Spotify",
    j_type: "Mobile App Developer",
    img: "https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg",
    time: "3 days ago",
    type: "Contract",
    level: "Junior",
    pay: "$95/hr",
    location: "Remote"
  },
  {
    c_name: "Flipkart",
    j_type: "Java Developer",
    img: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
    time: "1 day ago",
    type: "Full Time",
    level: "Intermediate",
    pay: "$105/hr",
    location: "Bangalore, India"
  },
  {
    c_name: "Infosys",
    j_type: "Associate Software Engineer",
    img: "https://logowik.com/content/uploads/images/infosys2157.jpg",
    time: "2 days ago",
    type: "Full Time",
    level: "Fresher",
    pay: "$60/hr",
    location: "Chennai, India"
  }
];


  return (
    <div className='parent' >
      {User_data.map(function(elem, idx){
        return <div key={idx} >
          <Jobcard img = {elem.img} name = {elem.c_name} time = {elem.time} job = {elem.j_type} type = {elem.type} level = {elem.level} pay = {elem.pay} location = {elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
