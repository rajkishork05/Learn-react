import Navbar from '../components/Navbar'
import Left from '../components/mid-section-pg1/Left'
import Right from '../components/mid-section-pg1/Right'

const Page1 = () => {
  return (
    <div className='h-screen w-full flex flex-col ' >
        {/* navbar */}
         <div className='px-20 py-8' >
            <Navbar/>
         </div>
         {/* mid section */}
      <div className=' px-20 py-4 flex-1 flex gap-5' >
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

export default Page1
