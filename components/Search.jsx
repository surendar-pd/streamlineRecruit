import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import CandidateCard from "./CandidateCard";
import { columnsFromBackend } from "../assests/data"

const Search = () => {

    const navigate = useNavigate();

    const [header, setHeader] = useState("flex justify-between items-center mb-8 fixed top-0 w-full p-4 md:px-16 transition-all duration-300")

    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("flex justify-between items-center mb-8 fixed top-0 w-full p-4 md:px-16 transition-all duration-300 bg-white")
            : setHeader("flex justify-between items-center mb-8 fixed top-0 w-full p-4 md:px-16 transition-all duration-300")
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    // const [selected, setSelected] = useState([]);

    // const onSelectCandidate = (index) => {
    //     console.log(selected.includes(index))
    //     if(selected.includes(index)){
    //         console.log("dd")
    //         const index1 = selected.indexOf(2);            
    //         selected.splice(index1, 1);
    //         console.log(selected)
    //     }else{
    //         console.log("hh")
    //         console.log(selected)
    //         setSelected([...selected, index])
    //     }
    // }


    const [columns, setColumns] = useState(columnsFromBackend);
    console.log(columns);
    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
            },
            [destination.droppableId]: {
            ...destColumn,
            items: destItems,
            },
        });
        } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
            ...column,
            items: copiedItems,
            },
        });
        }
    };


    return (
        <main className="bg-slate-100 min-h-screen h-full">
            <div className={header}>
                <div className="flex items-center gap-4">
                    <div onClick={() => navigate("/")} className="hover:scale-110 transition-all duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <h1 className="font-semibold text-2xl lg:text-3xl flex items-center">Candidates for <span className="ml-2 bg-blue-500/20 text-blue-500 text-sm p-2 rounded-lg">Frontend developer</span></h1>
                </div>
            </div>
            <main className="w-full min-h-full bg-slate-100 px-4 md:px-16 pt-20 lg:pt-40 lg:mx-auto lg:max-w-6xl">
                <section className="grid w-full h-full bg-slate-100 grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 pb-16">
                <DragDropContext
                    onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                    >
                        {Object.entries(columns).map(([columnId, column]) => {
                            return (
                            <Droppable key={columnId} droppableId={columnId}>
                                {(provided) => (
                                <div
                                    className="flex flex-col gap-2"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <h1 className="font-semibold">{column.title}</h1>
                                    {column.items.map((item, index) => (
                                        <CandidateCard key={item} item={item} index={index} />
                                    ))}
                                    {provided.placeholder}
                                </div>
                                )}
                            </Droppable>
                            );
                        })}
                </DragDropContext>
                </section>
            </main>
        </main>
    )
}

export default Search