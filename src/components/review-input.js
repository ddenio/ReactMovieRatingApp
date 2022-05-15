import React from 'react';

export default class ReviewInput extends React.Component {
    render() {
        return (
            <form>
                <div className="form-group d-flex justify-content-center">
                    <label>Review Comments:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comments'></textarea>
                </div>
            </form>
        );
    }
}