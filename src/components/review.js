import React from 'react';
import StarRating from './star-rating';

export default class Review extends React.Component {
    render() {
        return (
           
                <div className="card w-75 bg-secondary m-1 p-1 ">
                    
                    <StarRating stars={this.props.review.stars} />
                    <div className="card-body" id="comment-text">
                        {this.props.review.comment}
                    </div>
                </div>
           
        );
    } 
}