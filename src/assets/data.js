import images from ".";

const projectsDB = [
  {
    imgPath: images.mk_codezone,
    title: "MK-CodeZone",
    description:
      "MK-CodeZone is a full-stack EdTech platform for programers built using the MERN stack. It serves as a central hub for developers to connect, buy courses and explore the exciting world of programming together.",
    ghLink: "https://github.com/Mk4Levi/mk-codezone",
    demoLink: "https://mk-codezone.vercel.app/",
  },
  {
    imgPath: images.anime_hub,
    title: "Manthan Anime-Hub",
    description:
      "Manthan-Anime-Hub is a vibrant and inclusive online community platform which I've built specifically for anime enthusiasts. It serves as a central hub for anime fans to connect.",
    ghLink: "https://github.com/Mk4Levi/Manthan-Anime-Hub",
    demoLink: "https://manthan-anime-hub.vercel.app/",
  },
  {
    imgPath: images.adoptme_ssr,
    title: "Server-Side-Rendering with React",
    description:
      "It is a dynamic web app that incorporates Server-Side-Rendering (SSR). By rendering on the server before sending them to the client, it ensures faster initial page loads.",
    ghLink: "https://github.com/Mk4Levi/Server-Side-Rendering-React",
    demoLink: "https://adopt-pet-mk.vercel.app/",
  },
  {
    imgPath: images.portfolio_app,
    title: "My Portfolio Web-App",
    description:
      "This is my Portfolio web-app, built with advanced React.js. I have crafted this to showcase my finest projects, skills, contact details, collaborations, and achievements.",
    ghLink: "https://github.com/Mk4Levi?tab=repositories",
    demoLink: "https://manthan-mk-portfolio.vercel.app/",
  },
  {
    imgPath: images.leetcode,
    title: "LeetCode Demo-Clone",
    description:
      "This is a Clone of LeetCode Platform built by using React-concepts. Just like the original LeetCode, this platform provides you with a comprehensive coding experience.",
    ghLink: "https://github.com/Mk4Levi/Leetcode-Clone-MKP",
    demoLink: "https://leetcode-clone-mkp.vercel.app/",
  },
  {
    imgPath: images.manthanmk_webapp,
    title: "MK-Backend Web-App",
    description:
      "MK-Backend Web App is a backend app built with JS and it's server is built with Express.js. It has Signup and Login page where user's credentials will be stored in my Mongo-DB.",
    ghLink: "https://github.com/Mk4Levi/Manthan-MK-WebApp",
    demoLink: "https://manthan-mk-web.onrender.com/",
  },
  {
    imgPath: images.notes_app,
    title: "Notes-App with Firebase",
    description:
      "This Notes App is a powerful and intuitive note-taking application built using the React.js. Backend of this React-App is linked with Firebase, so your Notes will not be lost.",
    ghLink: "https://github.com/Mk4Levi/Notes-App-with-Firebase",
    demoLink: "https://notes-app-mk.vercel.app/",
  },
  {
    imgPath: images.todolist,
    title: "TO-DO List web app",
    description:
      "This To-Do List web-app offers a streamlined and efficient way to manage tasks by creating to-do items which will be stored in the MONGO-DB Atlas Database.",
    ghLink: "https://github.com/Mk4Levi/MK-ToDo-List",
    demoLink: "https://manthan-todolist-app.onrender.com/",
  },
  {
    imgPath: images.notes_keeper,
    title: "Notes-Keeper (Frontend)",
    description:
      "This Notes-Keeper React app is an user-friendly and efficient note-taking application. Users can easily create, edit, and delete notes using the intuitive interface.",
    ghLink: "https://github.com/Mk4Levi/MK-Notes-Keeper",
    demoLink: "https://mk-notes-keeper.netlify.app/",
  },
  {
    imgPath: images.github_profile,
    title: "Manthan's GitHub Profile",
    description:
      "I have made my GitHub's Profile visually appealing which showcases my professional works and contributions on GitHub. Feel free to explore my GitHub-portfolio.",
    ghLink: "https://github.com/Mk4Levi/Mk4Levi",
    demoLink: "https://github.com/Mk4Levi",
  },
  {
    imgPath: images.manthan_mk,
    title: "MK-Frontend Website",
    description:
      "This is a Frontend Website named Manthan-MK. It's a very interactive and visually stunning website that captivates users with its seamless UI experience.",
    ghLink: "https://github.com/Mk4Levi/MK-Personal-Website",
    demoLink: "https://manthan-mk.vercel.app/",
  },
  {
    imgPath: images.netflix,
    title: "Netflix UI-Clone",
    description:
      "Clone of Netflix-Platform built with React and Movie-API. Homepage showcases a visually appealing and intuitive interface, featuring a layout that is familiar to Netflix users.",
    ghLink: "https://github.com/Mk4Levi/Netflix-Clone-mk",
    demoLink: "https://mk-netflix-clone.vercel.app/",
  },
  {
    imgPath: images.chrome_home,
    title: "Personalized Chrome Homepage",
    description:
      "This is my personalized homepage for Chrome browser. It displays Live Weather report and Bitcoin prices using Fetch-API and changing-Background wallpaper using UnSplash-API",
    ghLink: "https://github.com/Mk4Levi/My-Chrome-Homepage",
    demoLink: "https://mk-chrome-home.vercel.app/",
  },
  {
    imgPath: images.tenzies_game,
    title: "Tenzies Game",
    description:
      "Tenzies Game is an exciting project built using React.js. To win this game you have to match all the buttons in the game-board with any single digit. Roll the dice to start the game.",
    ghLink: "https://github.com/Mk4Levi/Tenzies-Game-MK",
    demoLink: "https://tenzies-game-mk.vercel.app/",
  },
  {
    imgPath: images.weather_app,
    title: "Weather-Report App",
    description:
      "This is a Weather-Report App developed by using Express.js and Fetch-API. Enter the name of any city and it will show you the Weather Report from OpenWeather API.",
    ghLink: "https://github.com/Mk4Levi/Mk-Weather-Check",
    demoLink: "https://manthan-weather-check.onrender.com/",
  },
  {
    imgPath: images.simon_game,
    title: "My Simon Game",
    description:
      "This Simon Game is an engaging and addictive memory-based game built with Vanilla-JS. Put your memory skills to the test and try to remember the complex patterns.",
    ghLink: "https://github.com/Mk4Levi/Simon-Game-Mkp",
    demoLink: "https://manthan-simon-game.netlify.app/",
  },
  {
    imgPath: images.pirate_war,
    title: "Pirate War Card-Game",
    description:
      "This is Pirate War Game where 2 pirates battle with each other through their cards by rolling the Dice. For building this game I've used advanced concepts of ES6+.",
    ghLink: "https://github.com/Mk4Levi/Pirate-War-Game",
    demoLink: "https://Demo.vercel.app/",
  },
  {
    imgPath: images.chat_gpt,
    title: "ChatGPT-Demo CLone",
    description:
      "This ChatGPT Clone is built with React.js which delivers a dynamic and interactive chatbot experience with an AI assistant, providing intelligent and helpful responses in real-time.",
    ghLink: "https://github.com/Mk4Levi/ChatGPT-Demo-Clone",
    demoLink: "https://chatgpt-clone.netlify.app/",
  },
  {
    imgPath: images.students_card,
    title: "Students-Card React App",
    description:
      "This is a React-App which renders Students lists in different Cards and fetch random images from unsplash-API to show it on the Students Card.",
    ghLink: "https://github.com/Mk4Levi/Students-Card-React-App",
    demoLink: "https://students-card-react-app.vercel.app/",
  },
  {
    imgPath: images.newsletter_page,
    title: "Newsletter Signup Page",
    description:
      "This is a Newsletter Signup Page which I've built using Express.js and MongoDB. Users signed-up details will be stored in my MongoDB database.",
    ghLink: "https://github.com/Mk4Levi/MK-Newsletter-Page",
    demoLink: "https://manthan-signup-page.onrender.com/",
  },
  {
    imgPath: images.dice_game,
    title: "Roll the Dice-Game",
    description:
      "This is a Dice Game build with Vanilla-JS. Users can roll the dice to decide the winner. Press the click-me button to roll the dice, then it will show who is the winner.",
    ghLink: "https://github.com/Mk4Levi/Dice-Game_Mkp",
    demoLink: "https:///manthan-dice-game.netlify.app/",
  },
  {
    imgPath: images.drum_kit,
    title: "My Drum Kit",
    description:
      "My Drum-Kit is built with plain Vanilla-JS where users can play the Drum by pressing the specified keys. I've learned concepts like EventListener while building this project.",
    ghLink: "https://github.com/Mk4Levi/Drum-Kit_Mkp",
    demoLink: "https://manthan-drum-kit.netlify.app/",
  },
  // {
  //   imgPath: images.Demo,
  //   title: "Demo",
  //   description: "Demo",
  //   ghLink: "https://github.com/Mk4Levi/Demo",
  //   demoLink: "https://Demo.vercel.app/",
  // },
];

const skillsDB = [
  {
    skill: "React",
    link: "https://reactjs.org/",
    img: images.react,
  },
  {
    skill: "TypeScript",
    link: "https://typescriptlang.org/",
    img: images.typescript,
  },
  {
    skill: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: images.javascript,
  },
  {
    skill: "Express.js",
    link: "https://expressjs.com/",
    img: images.express,
  },
  {
    skill: "Node.js",
    link: "https://nodejs.org/",
    img: images.nodejs,
  },
  {
    skill: "MongoDB",
    link: "https://www.mongodb.com/",
    img: images.mongodb,
  },
  {
    skill: "MySQL",
    link: "https://www.mysql.com/",
    img: images.mysql,
  },
  {
    skill: "Next.js",
    link: "https://nextjs.org/",
    img: images.nextjs,
  },
  {
    skill: "Redux",
    link: "https://redux.js.org/",
    img: images.redux,
  },
  {
    skill: "Devops",
    link: "https://aws.amazon.com/devops/",
    img: images.devops,
  },
  {
    skill: "Docker",
    link: "https://docs.docker.com/",
    img: images.docker,
  },
  {
    skill: "GitHub",
    link: "https://github.com/",
    img: images.github,
  },
  {
    skill: "Git",
    link: "https://git-scm.com/",
    img: images.git,
  },
  {
    skill: "API",
    link: "https://www.ibm.com/topics/api",
    img: images.api,
  },
  {
    skill: "Firebase",
    link: "https://firebase.google.com/",
    img: images.firebase,
  },
  {
    skill: "Bootstrap",
    link: "https://getbootstrap.com/docs/",
    img: images.bootstrap,
  },
  {
    skill: "HTML-5",
    link: "https://www.w3schools.com/html/",
    img: images.html,
  },
  {
    skill: "CSS-3",
    link: "https://www.w3schools.com/css/",
    img: images.css,
  },
  {
    skill: "Java",
    link: "https://www.w3schools.com/java/",
    img: images.java,
  },
  {
    skill: "C++",
    link: "https://www.w3schools.com/cpp/",
    img: images.cpp,
  },
  {
    skill: "Python",
    link: "https://www.python.org",
    img: images.python,
  },
  {
    skill: "Tailwind-CSS",
    link: "https://tailwindcss.com/",
    img: images.tailwind,
  },
  {
    skill: "SASS",
    link: "https://sass-lang.com",
    img: images.sass,
  },
  // {
  //   skill: "Demo",
  //   link: "Demo",
  //   img: images.Demo,
  // },
];

const data = {
  projectsDB,
  skillsDB,
};

export default data;
