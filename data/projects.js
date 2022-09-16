import moodyImg from "../assets/moody-songs.png";
import portfolioImg from "../assets/portfolio.png";
import presidentImg from "../assets/presidents.png";
import teslaImg from "../assets/tesla-waiting-room.png"
import sithImg from "../assets/sithpng.png"

export const projects = [
     {
          id: 1,
          name: "tesla waiting room",
          image: teslaImg,
          techUsed: ["React", "TailwindCSS", "node"],
          blurb: "This project was built to help soon to be Tesla owners connect with eachother so everyone can get a better idea about when they can expect thier new car. Tesla Waiting Room was made using React and TailwindCSS in the frontend. Node.js and MongoDB were used in the backend. MVC was used to organize the backend. Users need to register to be able to access the app which allows them to follow, like, and create updates about thier cars estimated delivery time.",
          blurbConclusion:
               "This project allowed me to put everything I have learned into one app. I also had to manage my frustration and improve my problem solving skills.",
          description: "An app for soon to be Tesla owners.",
          githubLink: "https://github.com/snowsneakers/tesla-waiting-room",
          liveLink: "",
     },
     {
          id: 2,
          name: "portfolio",
          image: portfolioImg,
          techUsed: ["Next", "TailwindCSS"],
          blurb: "This is my fully responsive portfolio, also known as, the side project that is never complete. I like to think my portfolio evolves as I continue to learn. I put hardwork and time into making something I am proud of.",
          blurbConclusion:
               " I have learned that my portfolio will never be perfect, but it can display so much about me and my work.",
          description: "A fully responsive personal portfolio.",
          githubLink: "https://github.com/snowsneakers/another-portfolio",
          liveLink: "https://www.patricksnowden.com/",
     },
     {
          id: 3,
          name: "moody songs",
          image: moodyImg,
          techUsed: ["React", "TailwindCSS", "node"],
          blurb: "Feeling down, angry, or just want to chill ? Use this app to listen to songs that match your mood. Select the emoji that matches your mood and you will be presented with songs. This app uses an API I made that contains information for all the songs!",
          blurbConclusion:
               "This project allowed me to continue working on my backend growth, as well as, refine my React and TailwindCSS skills.",
          description: "Match your mood with a song.",
          githubLink: "https://github.com/snowsneakers/moody-songs-react",
          liveLink: "https://moody-songs.netlify.app/",
     },
     {
          id: 4,
          name: "Presidents",
          image: presidentImg,
          techUsed: ["Next", "TailwindCSS", "node"],
          blurb: "This is the place to learn all things U.S. Presidents. Visiting the Presidents page will let you learn about each President. The quiz page will let you test your President Knowledge.",
          blurbConclusion:
               "This project allowed me to use a data rich API that I made! I continued improving my backend skills, as well as, refine my React and TailwindCSS skills.",
          description: "Learn about U.S. Presidents.",
          githubLink: "https://github.com/snowsneakers/next-presidents",
          liveLink: "https://next-presidents.vercel.app/",
     },
     {
          id: 5,
          name: "stay in the hunt",
          image: sithImg,
          techUsed: ["ejs", "CSS", "node"],
          blurb: "This project was built to help our friends at 100Devs stay in the game, helping them to track the different activities we need to do before Huntober. This project was made using HTML, CSS, JS in the frontend. OPP was used to create the calendar class. Node.js and MongoDB were used in the backend. MVC was used to orgainize the backend. Users need to register in the app to gain access to the calendar which allows them to create and track the tasks they need to complete for the day as well as add more if needed during Huntober.",
          blurbConclusion:
               "This was a group project. My team and I utilized GitHub to contribute our parts. I gained experience working in a group, as well as, imporve my git knowledge/ confidence.",
          description: "Plan your days with this Huntober calendar.",
          githubLink: "https://github.com/snowsneakers/stay-in-the-hunt",
          liveLink: "https://sith.up.railway.app/",
     },
     {
          id: 6,
          name: "whos that pokemon",
          image: "https://github.com/snowsneakers/Whos-That-Pokemon/raw/main/assets/updatedgif.gif",
          techUsed: ["JavaScript", "TailwindCSS", "HTML"],
          blurb: "This will take everyone back to the good old days, the 90s. I wanted to create something using the pokeapi.co API, so I made a game to test your Pokemon knowledge. Chose your favorite generation, start guessing Pokemon, and get a high score! The Pokemon are pulled from the pokeapi.co API randomly and by selected generation. The silhouette is just some simple css.",
          blurbConclusion:
               "I wanted to make a game that utilized local storage to learn more about it and so users could come back and try and beat their previous high score. This project was also good help with bolstering my API familiarity.",
          description: "A game to test your pokemon knowledge!",
          githubLink: "https://github.com/snowsneakers/Whos-That-Pokemon",
          liveLink: "https://whosthatpokemonsp.netlify.app/",
     },
     {
          id: 7,
          name: "poke prices",
          image: "https://github.com/snowsneakers/pokemon-prices/blob/main/assets/pokeprices.gif?raw=true",
          techUsed: ["JavaScript", "TailwindCSS", "HTML"],
          blurb: "Dust off those old card binders! Pokemon card prices are crazy right now. Using the pokemonTCG API I created an app to let the user search for any Pokemon card and see the price. Using OOP, the information is pulled from the api and appended to the DOM. The price information is manipulated using array methods.",
          blurbConclusion:
               " This project allowed me to work on my Tailwind CSS skills, furthered my knowledge with OOP, and make me regret not keeping good care of my Pokemon cards.",
          description: "Check the current price of pokemon cards.",
          githubLink: "https://github.com/snowsneakers/pokemon-prices",
          liveLink: "https://pokemonprices.netlify.app/",
     },
];
