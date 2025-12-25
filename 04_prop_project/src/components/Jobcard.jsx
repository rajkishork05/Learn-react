import { Bookmark } from 'lucide-react'

const Jobcard = (user) => {
  return (
    <>
        <div className='card'>
        <div className="top">
          <img src={user.img} alt="" />
          <button className='top-btn' >Save <Bookmark/> </button>
        </div>
        <div className="middle"> 
          <h1>{user.name} <span>{user.time}</span> </h1>  
          <h2> {user.job} </h2>
          <div>
            <button>{user.type}</button>
            <button> {user.level} </button>
          </div>
        </div>
        <div className="bottom">
          <h2> {user.pay} <span>{user.location} </span> </h2>
          <button>Apply now</button>
        </div>
      </div>
    </>
  )
}

export default Jobcard
