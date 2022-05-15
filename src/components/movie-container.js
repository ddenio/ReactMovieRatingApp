import React, { cloneElement } from 'react';
// import harrypotter from '../images/harrypotter.webp';
// import pirates from '../images/pirates.jpg';
// import startrek from '../images/startrek.jpg';
// import thematrix from '../images/thematrix.webp';
import MovieList from './movie-list';



export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : [
                {
                    id: 1,
                    title: "Harry Potter and the Half-Blood Prince",
                    imagename: "harrypotter.webp",
                    description: "As Death Eaters wreak havoc in both Muggle and Wizard worlds, Hogwarts is no longer a safe haven for students. Though Harry (Daniel Radcliffe) suspects there are new dangers lurking within the castle walls, Dumbledore is more intent than ever on preparing the young wizard for the final battle with Voldemort. Meanwhile, teenage hormones run rampant through Hogwarts, presenting a different sort of danger. Love may be in the air, but tragedy looms, and Hogwarts may never be the same again.",
                    reviews: [
                        {
                            stars: 5,
                            comment: "The most intense Harry Potter film yet!"
                        },
                        {
                            stars: 5,
                            comment: "A cinematic materpiece!"
                        }
                    ]
    
                },
    
                {
                    id: 2,
                    title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
                    imagename: "pirates.jpg",
                    description: "Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.",
                    reviews: [
                        {
                            stars: 4,
                            comment: 'Great movie! They way they portrayed Captain Salazar and his crew was amazing!'
                        }
                    ]
    
                },
    
                {
                    id: 3,
                    title: 'Star Treak Into Darkness',
                    imagename: "startrek.jpg",
                    description: "The crew of the Starship Enterprise returns home after an act of terrorism within its own organization destroys most of Starfleet and what it represents, leaving Earth in a state of crisis. With a personal score to settle, Capt. James T. Kirk (Chris Pine) leads his people (Zachary Quinto, Karl Urban, Zoë Saldana) on a mission to capture a one-man weapon of mass destruction, thereby propelling all of them into an epic game of life and death.",
                    reviews: [
                        {
                            stars: 5,
                            comment: 'A cinematic thriller!'
                        },
                        {
                            stars: 4,
                            comment: 'Action packed, and full of surprises!'
                        }
                    ]
    
                },
    
                {
                    id: 4,
                    title: 'The Matrix: Resurrections',
                    imagename: "thematrix.webp",
                    description: "To find out if his reality is a physical or mental construct, Mr. Anderson, aka Neo, will have to choose to follow the white rabbit once more. If he's learned anything, it's that choice, while an illusion, is still the only way out of -- or into -- the Matrix. Neo already knows what he has to do, but what he doesn't yet know is that the Matrix is stronger, more secure and far more dangerous than ever before.",
                    reviews: [
                        {
                            stars: 3,
                            comment: 'A bit overplayed, crammed with cameos'
                        },
                        {
                            stars: 4,
                            comment: 'Keanu Reeves still has it!'
                        },
                        {
                            stars: 5,
                            comment: 'The series is a beaten horse with this one'
                        }
                    ]
    
                }
            ]
            };
    }

    addReview = (id, rating, comment) => {
           this.setState(({movies}) => {
            const movie = movies.find(movie => movie.id === id);
            movie.reviews = movie.reviews.concat(
              [{
                
                stars: rating,
                comment: comment
              }]
            );
            return {movies: movies};
        });
    }

    render() {

        
        
        return (
            <div className="container bg-primary">
                <MovieList {...{movies: this.state.movies, addReview: this.addReview}}/>
                
            </div>
        )
    }
}