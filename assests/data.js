import { v4 as uuidv4 } from 'uuid';
import User from "../assests/user.png"

export const appliedCandidates = [
    {
        id: "1",
        name: "John Doe",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "2",
        name: "Lea Vivien",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Freelance",
        experience: "5 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "3",
        name: "Helfried Nazım",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Hybrid",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "4",
        name: "Emma Ridwana",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "5",
        name: "Killian Priti",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "6",
        name: "Rajmund Loke",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "7",
        name: "Kamakshi Renia",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "8",
        name: "Suraj Tercero",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "9",
        name: "Carina Luisa",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
    {
        id: "10",
        name: "Fachtna Bedisa",
        img: User,
        email: "johndoe@gmail.com",
        phone: "+91 3476597637",
        position: "Full Stack Developer",
        workType: "Remote",
        experience: "3 Years",
        cv: "https://drive.google.com/file/d/1PpClzHthUBfKKUWB1Rt7b7_c3B9RDqBh/view?usp=drive_link"
    },
]

export const columnsFromBackend = {
    [uuidv4()]: {
    title: 'Applied',
    items: appliedCandidates,
    },
    [uuidv4()]: {
    title: 'Short Listed',
    items: [],
    },
    [uuidv4()]: {
    title: 'Interviewed',
    items: [],
    },
};