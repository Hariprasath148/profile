import examShelfImg from "../assets/project/1.png"
import digitalPlannerImg from "../assets/project/2.png"
import cubeAnimationImg from "../assets/project/3.png"
import customWheelImg from "../assets/project/4.png"
import modernNavImg from "../assets/project/5.png"
import qrGeneratorImg from "../assets/project/6.png"
import bentoGridImg from "../assets/project/7.png"
import examShelfHeroImg from "../assets/project/8.png"
import digitalPlannerHeroImg from "../assets/project/9.png"
import cubeAnimationHeroImg from "../assets/project/10.png"
import customWheelHeroImg from "../assets/project/11.png"
import modernNavHeroImg from "../assets/project/12.png"
import qrGeneratorHeroImg from "../assets/project/13.png"
import bentoGridHeroImg from "../assets/project/14.png"

export const projects = [
    {
        route : "examshelf",
        name : "ExamShelf",
        siteLink : "https://examshelf.vercel.app/",
        codeLink : "https://github.com/Admin-Examshelf/examshelf",
        img : examShelfImg ,
        HeroImg : examShelfHeroImg ,
        short_discription : "Exam Shelf is an in-house college group project I led, focused on helping students prepare more effectively for exams by generating custom question papers based on previous year papers, topics, and difficulty levels.",
        long_discription : "As the team lead, I guided the creation of Exam Shelf, a comprehensive academic platform developed as part of a college in-house project. The platform empowers students by giving them access to a repository of previous year question papers, official syllabi, and a custom paper generator. This generator allows users to create practice papers by analyzing trends from past years and filtering questions by topic or difficulty.Our goal was to improve exam preparation by making it smart, personalized, and resource-driven. I handled the full development lifecycle—from system design and backend logic to frontend UI/UX and deployment. The platform ensures responsive design, intuitive navigation, and a streamlined workflow for students.",
        tech : {
            ReactJS : "Built the core user interface with reusable, dynamic components for a smooth and modular frontend experience.",
            CSS : "Applied custom styles, fonts, and animations to enhance the visual design and user experience.",
            Bootstrap : "Provided the grid system and responsive structure to ensure layout consistency across different screen sizes.",
            TanStack : "Handled efficient data fetching, caching, and synchronization between client and server to improve app performance.",
            NodeJS : "Powered the backend logic, managing API communication, database operations, and application workflows.",
            Express : "Served as the backend server framework for handling routes, middleware, and RESTful API creation.",
            MongoDB : "Stored user data, past papers, syllabi, and generated question sets in a flexible and scalable NoSQL database.",
            GoogleAPI : "Integrated to retrieve official syllabi and academic documents directly within the platform.",
            EmailSender : "Enabled automatic email notifications for user updates, account verification, and custom paper delivery.",
            CORS : "Ensured secure and controlled communication between frontend and backend across different origins."
         },
        keyPoints : [
            "Based on Past Papers: The core feature allows paper generation from past exam patterns.",
            "Custom Paper Generator: Users can filter questions by topic, trend, and difficulty.",
            "Team Leadership: Led the project through all phases—from planning to deployment.",
            "Comprehensive Resource Hub: Includes syllabus access and organized previous year papers.",
            "Modern, Scalable Stack: Built using React, Node, MongoDB, and integrated APIs for performance and flexibility."


        ]
    },
    {
        route : "digital-planners",
        name : "Digital Planners",
        siteLink : "https://hariprasath148.github.io/my_project/HTML/",
        codeLink : "https://github.com/Hariprasath148/my_project",
        img : digitalPlannerImg ,
        HeroImg : digitalPlannerHeroImg ,
        short_discription : "Digital Planners is a responsive web app built with HTML, CSS, and JavaScript that helps users organize their week with customizable, paper-free planning tools.",
        long_discription : "Digital Planners is a responsive web app built with HTML, CSS, and JavaScript that helps users organize their week with customizable, paper-free planning tools.Say goodbye to traditional paper planners and experience the convenience of digital organization. Whether you're a student juggling assignments, a professional managing meetings, or a creative planning your next big project, Digital Planners offers a clean, intuitive interface and flexible templates tailored to your needs. Designed for all screen sizes, it ensures a smooth planning experience—anytime, anywhere.",
        tech : {
            HTML : "Structured the layout with clear, semantic elements for planner sections.",
            CSS : "Styled the design and made it fully responsive using Flexbox and media queries.",
            JS : "Added interactivity like task input and real-time updates for a smooth user experience."
        },
        keyPoints : [
            "Intuitive and user-friendly : Simplifies weekly planning with an easy-to-use interface.",
            "Intuitive and user-friendly : Simplifies weekly planning with an easy-to-use interface.",
            "Customizable templates : Users can personalize their planner to suit their needs.",    
            "No paper needed : A digital alternative for organizing tasks and schedules.",
            "Fully responsive : Works seamlessly on desktop, tablet, and mobile devices.",
            "Built with pure HTML, CSS, and JavaScript : No external libraries or frameworks used for a lightweight experience."
        ]
    },
    {
        route : "cube-animation",
        name : "Cube Animation",
        siteLink : "https://hariprasath148.github.io/codelabs/Glass-Animation/",
        codeLink : "https://github.com/Hariprasath148/codelabs/tree/main/Glass-Animation",
        img : cubeAnimationImg ,
        HeroImg : cubeAnimationHeroImg ,
        short_discription : "The Responsive Cube Animation simulates a glass effect using HTML, CSS, and JavaScript. With transparent surfaces, reflections, and smooth animations, the cube dynamically adjusts to screen sizes, offering a sleek, interactive experience across all devices.",
        long_discription : "The Responsive Cube Animation project showcases a dynamic, interactive cube that simulates a glass effect. Using HTML, CSS, and JavaScript, the cube features transparent surfaces, reflections, and smooth transitions that mimic the appearance of glass. Interactive features such as rotation on hover or click are powered by JavaScript, while CSS handles the 3D transformations, transparency, and lighting effects. The cube is fully responsive, adjusting in size and orientation based on screen dimensions, providing an immersive and smooth experience on any device.",
        tech : {
            HTML : "Structured the layout for the cube and its elements, providing the basic structure for the animations and interactivity.",
            CSS : "Used 3D transformations, transparency, and lighting effects to create the glass-like appearance of the cube. Media queries were employed to make the cube responsive.",
            JS : "Enabled interactivity, allowing the cube to rotate on hover or click, and dynamically adjusted its size and orientation based on user interactions and screen size."
        },
        keyPoints : [
            "Glass Effect Simulation: The cube has a transparent, reflective appearance, mimicking a glass-like material.",
            "Interactive Rotation: The cube rotates on hover or click, powered by JavaScript for a dynamic user experience.",
            "Responsive Design: The cube adjusts its size and orientation automatically across devices, ensuring a seamless experience on mobile, tablet, and desktop.",
            "3D Transformations: CSS handles the 3D rotations, transparency, and lighting effects, creating a realistic visual experience.",
            "Sleek Animations: Smooth animations bring the cube to life, with dynamic movements and interactive features that engage the user."
        ]
    },
    {
        route : "Custome-Wheel",
        name : "Custome Whell",
        siteLink : "https://hariprasath148.github.io/CustomeWheel/",
        codeLink : "https://github.com/Hariprasath148/CustomeWheel",
        img : customWheelImg,
        HeroImg : customWheelHeroImg,
        short_discription : "The Custom Wheel Project is an interactive 9-grid layout where scrolling starts from the center grid, moving to the 9th grid. It includes a navigation grid for easy navigation and zoom-in/zoom-out features for better control.",
        long_discription : "The Custom Wheel Project is an innovative navigation system built with a 9-grid layout, where the center grid serves as the starting point, and scrolling allows users to navigate through to the 9th grid. This dynamic layout uses a scrolling wheel to interactively transition between grids. On top of that, a navigation grid helps users jump to specific grids, while the zoom in/zoom out feature allows for better visualization and control. Designed with a focus on usability and interactivity, this project offers a unique experience using only HTML, CSS, and JavaScript.",
        tech : {
            HTML : "Used to structure the 9-grid layout and create interactive elements like the navigation grid, zoom buttons, and scrollable grid sections.",
            CSS : "Styled the grid layout, navigation controls, and responsive design, ensuring the project works smoothly on various devices with clean, modern visuals.",
            JS : "Implemented the core functionality, including the scrolling behavior, zoom in/out controls, and interactive navigation, providing an engaging experience without relying on external libraries."
        },
        keyPoints : [
            "9-Grid Interactive Layout: Allows navigation through a 9-grid layout by scrolling from the center grid.",
            "Dynamic Navigation Grid: Users can directly navigate to a particular grid with ease.",
            "Zoom In/Out Feature: Enables zooming for better visibility and control over the grid.",    
            "Built with pure HTML, CSS, and JavaScript: No frameworks or libraries, keeping the project lightweight and efficient.",
            "User-Friendly Experience: Smooth interactivity with simple controls for a seamless experience."
        ]
    },
    {
        route : "modern-nav",
        name : "Modern Navigation",
        siteLink : "https://hariprasath148.github.io/portfolio/",
        codeLink : "https://github.com/Hariprasath148/portfolio",
        img : modernNavImg,
        HeroImg : modernNavHeroImg,
        short_discription : "The Modern Navigation Bar is a sleek, side-slide navigation menu built using React.js and Hash Routing. It features a smooth slide-out effect and utilizes hash-based routes for seamless navigation between sections.",
        long_discription : "The Modern Navigation Bar is a stylish side-slide navigation menu created with React.js. It integrates hash routing to navigate between different sections of the app without reloading the page, making the user experience smooth and dynamic. The navigation menu slides in and out with a visually appealing effect, and the routing system ensures that each section is accessible via specific URLs, marked by hash fragments (#). This project is responsive, adapting seamlessly to various screen sizes, and provides a clean, modern interface for easy navigation.",
        tech : {
            ReactJS : "Used to create the dynamic side-slide navigation component. React hooks and state management allow for smooth toggling and handling the open/close behavior of the navigation menu.",
            CSS : "Styled the sliding effect, transitions, and layout, ensuring the navigation bar is visually appealing and responsive across all screen sizes.",
            JS : "Implemented the functionality for handling user interactions, such as opening and closing the navigation menu and ensuring smooth transitions."
        },
        keyPoints : [
            "Side-Slide Navigation: The menu smoothly slides in and out, providing a modern and engaging user experience.",
            "Responsive Design: The navigation bar adjusts to different screen sizes, ensuring a seamless experience on mobile, tablet, and desktop.",
            "Built with React.js: Utilized React components and hooks to manage state and interactivity, providing dynamic behavior without page reloads.",    
            "Customizable: The navigation menu can easily be customized to include different sections or themes, making it versatile for various projects.",
            "Smooth Transitions: CSS animations create a smooth and visually appealing sliding effect, enhancing the user experience."
        ]
    },
    {
        route : "qr-generator",
        name : "QR Generator",
        siteLink : "https://hariprasath148.github.io/React-CodeLabs/#/QR",
        codeLink : "https://github.com/Hariprasath148/React-CodeLabs/blob/main/src/pages/QRgenerator.jsx",
        img : qrGeneratorImg ,
        HeroImg : qrGeneratorHeroImg ,
        short_discription : "The QR Code Generator is a web app built with React.js, allowing users to easily generate QR codes. It utilizes a QR server to convert input data into scannable QR codes.",
        long_discription : "The QR Code Generator is a user-friendly web application built with React.js. By integrating a QR server, this app enables users to input any text, URL, or data and instantly generate a unique, scannable QR code. The app is designed with simplicity in mind, offering a clean interface for users to generate codes quickly and easily. With the power of React, the app ensures smooth interactions and instant feedback, making it both efficient and enjoyable to use.",
        tech : {
            ReactJS : "The core technology used to build the dynamic, interactive user interface. React handles the state and UI updates efficiently, providing a smooth user experience.",
            QRServer : "A third-party QR code generation service that converts input data into QR codes. The server communicates with the React app to produce the code and display it in real time.",
            CSS : "Styled the application for a clean, modern look, ensuring the user interface is simple and easy to navigate."
        },
        keyPoints : [
            "Easy QR Code Generation: Users can quickly generate QR codes by entering text, URLs, or any other data.",
            "Built with React.js: React ensures smooth state management and dynamic user interactions without page reloads.",
            "Third-Party QR Server Integration: Uses a QR code generation service to produce scannable codes in real-time.",    
            "Responsive and User-Friendly: The app is designed to work seamlessly on all devices, providing a smooth experience across desktop and mobile.",
            "Instant Feedback: Generate and view QR codes immediately after entering data, making it fast and efficient."
        ]
    },
    {
        route : "bento-grid",
        name : "Bento Grid",
        siteLink : "https://hariprasath148.github.io/codelabs/Bento-grid/",
        codeLink : "https://github.com/Hariprasath148/codelabs/tree/main/Bento-grid",
        img : bentoGridImg ,
        HeroImg : bentoGridHeroImg ,
        short_discription : "The Bento Grid is a responsive grid layout built using only Bootstrap and HTML. The layout is designed to display dynamic content, organized in a clean, flexible structure inspired by Bento boxes.",
        long_discription : "For the Bento Grid project, I challenged myself to create a responsive, flexible grid layout using Bootstrap and HTML. The layout arranges content in a way that adapts to various screen sizes, ensuring it remains organized and visually appealing, much like the neat compartments of a Bento box. Using Bootstrap’s grid system, I was able to quickly create a layout that adjusts dynamically for different types of content. The project was completed using just HTML for structure and Bootstrap for styling and responsiveness, making it a lightweight and efficient solution for a responsive grid.",
        tech : {
            HTML : "Provided the structure for the grid layout and content, arranging items into rows and columns using basic HTML elements.",
            Bootstrap : "Leveraged Bootstrap’s grid system to create a responsive, flexible layout that adjusts based on screen size, ensuring a consistent user experience across devices."
        },
        keyPoints : [
            "Completed with Bootstrap and HTML: The grid layout was created using only Bootstrap for responsiveness and HTML for structure.",
            "Responsive Design: Ensures the layout works seamlessly on mobile, tablet, and desktop screens, adapting to different devices.",
            "Inspired by Bento Boxes: The grid layout is designed to display content in a neat, organized, and compartmentalized manner.",
            "Fast Development: Using Bootstrap’s grid system, the layout was created quickly, making the project efficient and lightweight.",
            "Customizable Content: The grid cells can easily be filled with different types of content like images, text, or videos, offering flexibility."
        ]
    },
]