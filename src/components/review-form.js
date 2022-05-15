import React from 'react';
import SubmitButton from './submit-button';
import ReviewInput from './review-input';
import StarRating from './star-rating';

export default class ReviewForm extends React.Component {
    render() {

        console.log(this.props);
        return (
      
            <form onSubmit={this.props.submitHandler} className= "border border-secondary rounded p-2 bg-secondary m-3">
                <div className="form-group">
                    <label>Star rating:</label>
                    <StarRating name= "stars" stars={null} />
                </div>
                <div className="form-group">
                    <label>Rating Comments:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name = "comment"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            

            // <div className="review-form">
            //     <form onSubmit = {this.props.submitHandler}>
            //         <label>Stars:</label>
                        
            //             <StarRating name = "stars" stars={null} />
            //             <label>Comment:</label>
            //             <textarea rows="2" cols="25" name="comment" /> 
            //             <button className="btn btn-primary" type="submit">Submit</button>
            //     </form>
            // </div>
           
        );
    }
}