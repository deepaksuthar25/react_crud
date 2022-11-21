import React, { Component } from 'react';

class MovieCreate extends Component {

    constructor() {

        super()
        this.state = {
            movieName: null,
            movieRating: null,
            movieReview: null
        }
    }

    create() {
        // console.warn(this.state);

        fetch('http://localhost:5000/review', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Review has heen added")
            })
        })
    }

    render() {
        return (
            <div>
                <h2>MovieCreate</h2>

                <div>
                    <input onChange={(event) => { this.setState({ movieName: event.target.value }) }} placeholder="Movie Name" /> <br /><br />
                    <input onChange={(event) => { this.setState({ movieRating: event.target.value }) }} placeholder="Movie Rating" /> <br /><br />
                    <input onChange={(event) => { this.setState({ movieReview: event.target.value }) }} placeholder="Movie Review" /> <br /><br />

                    <button onClick={() => { this.create() }}>Add Review</button>
                </div>
            </div>
        );
    }
}

export default MovieCreate;