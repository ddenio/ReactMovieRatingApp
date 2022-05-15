import React from 'react';
import Review from './review';
import ReviewForm from './review-form';


export default class Movie extends React.Component {
    constructor(props) {
        super(props);
            
    }
    render() {

        const submitHandler = (e) => {
            e.preventDefault();
            this.props.addReview(this.props.id, e.target.rating.value, e.target.comment.value);
            e.target.reset();
        }

        const props = {
            submitHandler
        };

        return (
            <div className="card m-3">
                <div className="card-header border border-dark bg-secondary text-center font-weight-bold " id="movie-title">
                    {this.props.title} 
                </div>
                <div className="card-body bg-primary ">
                    <div className='d-flex justify-content-center border border-dark rounded' id="movie-image">
                    <img src={`/images/${this.props.imagename}`} className="m-4 " /></div><br></br>
                    <div className="font-weight-bold">
                    {this.props.description}
                    </div>
                </div>
                <div className="card-footer font-weight-bold bg-dark">
                    {this.props.reviews && this.props.reviews.map((review, index) => <Review key={index} {...{
                        review,
                    }}/>)}
                    <ReviewForm {...props} />
                </div>
            </div>
        )
    }
}