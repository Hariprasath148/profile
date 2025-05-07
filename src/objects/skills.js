import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { FaWix } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiCanva } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";

export const skills = {
    techStack : [
        {
            name : "HTML",
            icon : FaHtml5,
            known : "Elements, Structure, Forms, Input, Links, Media, Embedding, Attributes.",
            progress : "95%"
        },
        {
            name : "CSS",
            icon : FaCss3Alt,
            known : "Flexbox , animations, responsive design.",
            progress : "90%"
        },
        {
            name : "JS",
            icon : FaJsSquare,
            known : "Variables and Data Types, Functions, Asynchronous JavaScript, This Keyword, Scope and Closures.",
            progress : "70%"
        },
        {
            name : "ReactJS",
            icon : RiReactjsFill,
            known : "JSX, Components, State and Props, Lifecycle Methods, Hooks, Event Handling, React Router.",
            progress : "40%"
        },
        {
            name : "Bootstrap",
            icon : FaBootstrap,
            known : "Grid System, Responsive Design, Typography, Components, Utilities, Forms, Customization.",
            progress : "70%"
        },
        {
            name : "Express",
            icon : FaJsSquare,
            known : "Routing, Middleware, Request & Response Objects, Error Handling, Authentication, Template Engines.",
            progress : "30%"
        },
        {
            name : "NodeJS",
            icon : FaNodeJs,
            known : "Callbacks, Promises, async/await, Modules, Express Integration, HTTP Module, Error Handling.",
            progress : "40%"
        },
        {
            name : "MongoDB",
            icon : DiMongodb,
            known : "CRUD Operations, Collections and Documents, Data Modeling, Aggregation Framework, Mongoose, Validation.",
            progress : "20%"
        },
        {
            name : "JAVA",
            icon : FaJava,
            known : "Classes, objects, Methods, Inheritance, Polymorphism, Exception Handling, Multithreading.",
            progress : "80%"
        },
    ],
    otherTools : [
        {
            name : "Figma",
            icon : FaFigma,
            known : "Frames and Layouts, Auto Layout, Prototyping and Interactions,Collaboration and Sharing.",
            progress : "95%"
        },
        {
            name : "WIX",
            icon : FaWix,
            known : "Drag-and-Drop Editor, Templates and Themes,Artificial Design Intelligence, Responsive Design.",
            progress : "90%"
        },
        {
            name : "Git / Github",
            icon : FaGithub,
            known : "Repositories, Commits and Version Control, Branching and Merging, Pull Requests, Collaboration.",
            progress : "60%"
        },
        {
            name : "VS code",
            icon : VscVscode,
            known : "Proficient in using VS Code efficiently.",
            progress : "60%"
        },
        {
            name : "Canva",
            icon : SiCanva,
            known : "Skilled in designing efficiently using Canva.",
            progress : "70%"
        },
        {
            name : "Eclipse",
            icon : SiEclipseide,
            known : "Proficient in developing using Eclipse IDE efficiently.",
            progress : "70%"
        }
    ]
}