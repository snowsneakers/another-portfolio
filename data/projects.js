import moodyImg from "../assets/moody-songs.png";
import portfolioImg from "../assets/portfolio.png";

export const projects = [
     {
          id: 1,
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
          id: 2,
          name: "poke prices",
          image: "https://github.com/snowsneakers/pokemon-prices/blob/main/assets/pokeprices.gif?raw=true",
          techUsed: ["JavaScript", "TailwindCSS", "HTML"],
          blurb: "Dust off those old card binders! Pokemon card prices are crazy right now. Using the Weatherdbi API I created an app to let the user search for any Pokemon card and see the price. Using OOP classes, the information is pulled from the api and appended to the DOM. The price information is mainuplated using array methods.",
          blurbConclusion:
               " This project allowed me to work on my Tailwind CSS skills, furthered my knowledge with OOP, and make me regret not keeping good care of my Pokemon cards.",
          description: "Check the current price of pokemon cards.",
          githubLink: "https://github.com/snowsneakers/pokemon-prices",
          liveLink: "https://pokemonprices.netlify.app/",
     },
     {
          id: 3,
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
          id: 4,
          name: "moody songs",
          image: moodyImg,
          techUsed: ["React", "TailwindCSS", "node"],
          blurb: "This will take everyone back to the good old days, the 90s. I wanted to create something using the pokeapi.co API, so I made a game to test your Pokemon knowledge. Chose your favorite generation, start guessing Pokemon, and get a high score! The Pokemon are pulled from the pokeapi.co API randomly and by selected generation. The silhouette is just some simple css.",
          blurbConclusion:
               "I wanted to make a game that utilized local storage to learn more about it and so users could come back and try and beat their previous high score. This project was also good help with bolstering my API familiarity.",
          description: "Match your mood with a song.",
          githubLink: "https://github.com/snowsneakers/moody-songs-react",
          liveLink: "https://moody-songs.netlify.app/",
     },
];
