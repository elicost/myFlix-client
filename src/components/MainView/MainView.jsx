import { useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            Title: "One Battle After Another",
            Description: "When their evil nemesis resurfaces after 16 years, a band of ex-revolutionaries reunite to rescue the daughter of one of their own. A black comedy action-thriller inspired by Thomas Pynchon's novel Vineland.",
            Genre: {
                Name: "Action",
                Description: "Action films emphasize exciting movement-oriented sequences, including fights, chases, and explosions, often placing the protagonist in dangerous or high-stakes situations."
            },
            Director: {
                Name: "Paul Thomas Anderson",
                Bio: "Paul Thomas Anderson is an American filmmaker known for his sprawling ensemble dramas and meticulous craft. His body of work includes Boogie Nights, Magnolia, There Will Be Blood, The Master, Phantom Thread, and Licorice Pizza.",
                Birth: "1970",
            },
            Actors: ["Leonardo DiCaprio", "Sean Penn", "Teyana Taylor"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_obaa.jpg",
            Featured: true
        },
        {
            id: 2,
            Title: "Thief",
            Description: "A highly skilled professional jewel thief plans to leave the criminal world behind after one last score, but discovers that escape is not as simple as he had hoped when a powerful crime boss refuses to let him go.",
            Genre: {
                Name: "Crime",
                Description: "Crime films center around criminal activity, exploring the lives of criminals, the law enforcement pursuing them, or the impact of crime on individuals and society."
            },
            Director: {
                Name: "Michael Mann",
                Bio: "Michael Mann is an American filmmaker known for his stylish crime dramas and meticulous attention to authenticity. His filmography includes Heat, Collateral, The Insider, and Miami Vice.",
                Birth: "1943",
            },
            Actors: ["James Caan", "Tuesday Weld", "Robert Prosky"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_thief.jpg",
            Featured: false
        },
        {
            id: 3,
            Title: "The Fall",
            Description: "In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a fellow patient, a young girl with a broken arm, a fantastic story about five mythical heroes on a quest for revenge.",
            Genre: {
                Name: "Fantasy",
                Description: "Fantasy films feature magical or supernatural elements as a primary component of the plot, setting, or theme, often taking place in imaginary worlds."
            },
            Director: {
                Name: "Tarsem Singh",
                Bio: "Tarsem Singh is an Indian-born filmmaker known for his striking visual style developed through his work in music videos and commercials. His films include The Cell, The Fall, and Immortals.",
                Birth: "1961",
            },
            Actors: ["Lee Pace", "Catinca Untaru", "Justine Waddell"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_thefall.jpg",
            Featured: false
        },
        {
            id: 4,
            Title: "Prisoners",
            Description: "When two young girls go missing on Thanksgiving, a desperate father takes matters into his own hands after the police release the only suspect. A detective assigned to the case works through a web of clues to find the truth.",
            Genre: {
                Name: "Thriller",
                Description: "Thriller films create intense excitement and suspense through tension, uncertainty, and high-stakes situations that keep audiences on the edge of their seats."
            },
            Director: {
                Name: "Denis Villeneuve",
                Bio: "Denis Villeneuve is a Canadian filmmaker known for his visually stunning and thematically ambitious films. His work includes Incendies, Sicario, Arrival, Blade Runner 2049, and the Dune films.",
                Birth: "1967",
            },
            Actors: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_prisoners.jpg",
            Featured: true
        },
        {
            id: 5,
            Title: "High and Low",
            Description: "A wealthy shoe company executive becomes the target of a kidnapper who mistakenly abducts his chauffeur's son instead of his own, forcing him to choose between his fortune and the child's life.",
            Genre: {
                Name: "Crime",
                Description: "Crime films center around criminal activity, exploring the lives of criminals, the law enforcement pursuing them, or the impact of crime on individuals and society."
            },
            Director: {
                Name: "Akira Kurosawa",
                Bio: "Akira Kurosawa was a Japanese filmmaker who directed 30 feature films over six decades. Widely regarded as one of the greatest and most influential directors in cinema history, his works include Rashomon, Seven Samurai, Ikiru, and Ran.",
                Birth: "1910",
                Death: "1998"
            },
            Actors: ["Toshiro Mifune", "Tatsuya Nakadai", "Kyoko Kagawa"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_highandlow.jpg",
            Featured: false
        },
        {
            id: 6,
            Title: "The Master",
            Description: "A Naval veteran struggling with PTSD arrives home from World War II unsettled and uncertain of his future, until he is drawn to a charismatic intellectual leader and his faith-based organization.",
            Genre: {
                Name: "Drama",
                Description: "Drama films focus on realistic characters dealing with emotional themes and interpersonal conflicts, often exploring the depth of the human experience."
            },
            Director: {
                Name: "Paul Thomas Anderson",
                Bio: "Paul Thomas Anderson is an American filmmaker known for his sprawling ensemble dramas and meticulous craft. His body of work includes Boogie Nights, Magnolia, There Will Be Blood, The Master, Phantom Thread, and Licorice Pizza.",
                Birth: "1970",
            },
            Actors: ["Joaquin Phoenix", "Philip Seymour Hoffman", "Amy Adams"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_themaster.jpg",
            Featured: true
        },
        {
            id: 7,
            Title: "Paris, Texas",
            Description: "A man wanders out of the Texas desert after disappearing for four years. Reunited with his brother, he slowly reconnects with society and sets out to find his estranged wife and rebuild his relationship with his young son.",
            Genre: {
                Name: "Drama",
                Description: "Drama films focus on realistic characters dealing with emotional themes and interpersonal conflicts, often exploring the depth of the human experience."
            },
            Director: {
                Name: "Wim Wenders",
                Bio: "Wim Wenders is a German filmmaker regarded as a major figure of New German Cinema. Known for his meditative style and exploration of displacement, his works include Wings of Desire, Buena Vista Social Club, and Perfect Days.",
                Birth: "1945",
            },
            Actors: ["Harry Dean Stanton", "Nastassja Kinski", "Dean Stockwell"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_paristexas.jpg",
            Featured: false
        },
        {
            id: 8,
            Title: "Hereditary",
            Description: "After the family matriarch passes away, a grieving family begins to uncover disturbing secrets about their ancestry. Their attempts to escape a sinister fate become increasingly futile as terrifying events unfold.",
            Genre: {
                Name: "Horror",
                Description: "Horror films are designed to frighten and unsettle audiences through suspense, tension, and shocking imagery, often exploring themes of the unknown and supernatural."
            },
            Director: {
                Name: "Ari Aster",
                Bio: "Ari Aster is an American filmmaker known for his unsettling combination of dark comedy, horror, and graphic imagery. He gained wide recognition with Hereditary and Midsommar, followed by Beau Is Afraid and Eddington.",
                Birth: "1986",
            },
            Actors: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_hereditary.jpg",
            Featured: false
        },
        {
            id: 9,
            Title: "Superbad",
            Description: "Two inseparable best friends navigate their last weeks of high school, desperately trying to score alcohol for a party and make their mark before graduation separates them.",
            Genre: {
                Name: "Comedy",
                Description: "Comedy films are designed to entertain and amuse audiences through humor, exaggeration, and lighthearted storytelling, often reflecting on everyday life in a funny way."
            },
            Director: {
                Name: "Greg Mottola",
                Bio: "Greg Mottola is an American filmmaker known for directing comedies and character-driven films. His work includes Superbad, Adventureland, and Paul, as well as television directing on Arrested Development and The Newsroom.",
                Birth: "1964",
            },
            Actors: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_superbad.jpg",
            Featured: false
        },
        {
            id: 10,
            Title: "The Northman",
            Description: "A Viking prince embarks on an epic quest to avenge the murder of his father at the hands of his uncle, journeying from Iceland to the gates of Hel in a brutal saga of fate and vengeance.",
            Genre: {
                Name: "Action",
                Description: "Action films emphasize exciting movement-oriented sequences, including fights, chases, and explosions, often placing the protagonist in dangerous or high-stakes situations."
            },
            Director: {
                Name: "Robert Eggers",
                Bio: "Robert Eggers is an American filmmaker known for his meticulous historical authenticity and blending of horror, folklore, and mythology. His films include The Witch, The Lighthouse, The Northman, and Nosferatu.",
                Birth: "1983",
            },
            Actors: ["Alexander Skarsgård", "Nicole Kidman", "Anya Taylor-Joy"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_thenorthman.jpg",
            Featured: true
        },
        {
            id: 11,
            Title: "The Seventh Seal",
            Description: "A disillusioned knight returning from the Crusades encounters Death on a plague-ravaged Swedish shore and challenges him to a game of chess, buying time to search for meaning in a world consumed by suffering.",
            Genre: {
                Name: "Drama",
                Description: "Drama films focus on realistic characters dealing with emotional themes and interpersonal conflicts, often exploring the depth of the human experience."
            },
            Director: {
                Name: "Ingmar Bergman",
                Bio: "Ingmar Bergman was a Swedish filmmaker and playwright widely considered one of the greatest directors in cinema history. His deeply personal explorations of faith, mortality, and human relationships include The Seventh Seal, Persona, Wild Strawberries, and Fanny and Alexander.",
                Birth: "1918",
                Death: "2007"
            },
            Actors: ["Max von Sydow", "Gunnar Björnstrand", "Bengt Ekerot"],
            ImagePath: "https://image.tmdb.org/t/p/w500/placeholder_seventhseal.jpg",
            Featured: false
        }
    ])
};