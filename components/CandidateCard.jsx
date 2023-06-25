/* eslint-disable react/prop-types */
// import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


const CandidateCard = ({ item, index }) => {

    console.log(item.id);
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            >
            <div className='border flex items-center justify-between bg-white p-4 rounded'>
                <div className="flex gap-1 items-center">
                    <img className="w-12" alt={item.name} src={`${item.img}`}/>
                    <h1 className="text-base font-medium">{item.name}</h1>
                </div>
                <a target="_blank" href={item.cv} className="text-sm bg-blue-500 px-4 py-2 rounded justify-center flex items-center text-white" rel="noreferrer">{"Resume"}</a>
            </div>
            </div>
        )}
        </Draggable>
    )
}

export default CandidateCard