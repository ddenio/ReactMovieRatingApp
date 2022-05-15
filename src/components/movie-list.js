import React from 'react';
import Movie from './movie';

import ReviewForm from './review-form';


export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                movies: props.movies
                

            };
    }
    render() {
        
        let movies;
        if (this.state.movies) {
            movies = this.state.movies.map((movie, index) => {
                let props = {
                    ...movie,
                    addReview: this.props.addReview
                };
                return (<Movie key={index} {...props} />);
            });
            
        }
        return (
            
            <div className="card bg-dark ">
                <div className="card-header ">
                    {movies}

                </div>
            </div>
            
        );
    }
}