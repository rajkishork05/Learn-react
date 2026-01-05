import React, { useState } from "react";
import Card from "./components/Card";
import {toast, ToastContainer} from "react-toastify"
const App = () => {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");
  const [note, setNote] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(!title.trim("") || !para.trim("")){
      toast.error("App empty block nahi chod skte");
      return; 
    }

    const newNote = [...note];
    newNote.push({title, para});
    setNote(newNote)

    // setNote((prev) => [...prev, newNote]);
    setTitle("");
    setPara("");
};

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <ToastContainer />
      {/* Header */}
      <h1 className="text-center text-4xl font-bold pt-8 tracking-wide">
        📝 My Notes
      </h1>

      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="max-w-2xl mx-auto mt-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter title"
          className="w-full bg-transparent border-b-2 border-gray-400 focus:border-blue-500 outline-none text-2xl py-2 transition-all"
        />

        <textarea
          value={para}
          onChange={(e) => setPara(e.target.value)}
          placeholder="Write your note..."
          className="w-full bg-transparent border border-gray-400 focus:border-blue-500 outline-none text-lg p-4 rounded-lg resize-none h-40 transition-all"
        />

        <button
          className="self-end bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg font-semibold transition-all hover:scale-105"
        >
          Add Note
        </button>
      </form>

      {/* Notes Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {note.map((ele, idx) => (
          <Card key={idx} idx = {idx} title={ele.title} para={ele.para}  setNote={setNote} note={note} />
        ))}
      </div>
    </div>
  );
};
export default App;
