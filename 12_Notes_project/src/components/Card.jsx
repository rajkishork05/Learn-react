import { toast } from "react-toastify";

const Card = (prop) => {

   
  const deleteNote =(index)=>{
    // by using filter
  //  prop.setNote(prev => prev.filter((_, i) => i !== index ));    
   
  //by using splice
  const copyNote = [...prop.note];
  copyNote.splice(index,1);
  prop.setNote(copyNote)

  //ek delete toast
  // toast.success("Successfully Deleted")
  toast.success("Successfully Deleted", {   // timer in toast
  autoClose: 2000,
});
  
  }

  return (
    <div className="bg-white/10 relative backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-xl hover:scale-105 transition-all">
      
      <h1 onClick={()=> deleteNote(prop.idx)} className=" absolute right-8  cursor-pointer hover:scale-120 hover:bg-red-600 hover:text-white transition-all font-extrabold text-xl text-center  w-8 rounded-full  text-red-800  " >X</h1>
      <h2 className="text-xl font-bold text-blue-400 mb-2">
        {prop.title}
      </h2>
      <p className="text-gray-200 text-sm leading-relaxed">
        {prop.para}
      </p>
    </div>
  );
};

export default Card;
