import React from 'react'
import Card from './Card'

const Right = (prop) => {
  const Content = [
     {
    id: 1,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    thought: "Small steps every day can quietly build a future stronger than loud promises."
  },
  {
    id:2,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    thought: "Your comfort zone may feel safe, but nothing exciting ever grows there."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    thought: "Discipline is choosing what you want most over what you want right now."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
    thought: "Sometimes progress looks like rest, reflection, and trusting the process patiently."
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
    thought: "Dreams work only when effort shows up daily, even on unmotivated days."
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    thought: "If plan A fails, remember the alphabet has twenty five more letters."
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    thought: "Growth begins the moment you stop waiting for motivation and start taking action."
  }
  ]
  return (
    <div id='right' className= 'overflow-x-auto p-6 gap-5 h-full w-2/3 flex' >
     {Content.map(function(elem){
      return <div key={elem.id}><Card id = {elem.id} img = {elem.img} para = {elem.thought} /></div>
     })}
    </div>
  )
}

export default Right
