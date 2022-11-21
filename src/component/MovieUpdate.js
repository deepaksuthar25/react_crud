import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function MovieUpdate(props) {

    let { id } = useParams();
    // console.log(id);

    const [movieName, setmovieName] = useState('');
    const [movieRating, setmovieRating] = useState('');
    const [movieReview, setmovieReview] = useState('');

    useEffect(() => {

        axios.get(`http://localhost:5000/review/${id}`)
            .then((response) => {
                // console.log(response.data[0].movieName);

                setmovieName(response.data[0].movieName);
                setmovieRating(response.data[0].movieRating);
                setmovieReview(response.data[0].movieReview);

                // console.log(movieName );
            })
}, [id]);

const update = () => {

    axios.put(`http://localhost:5000/review/${id}`, {
        movieName,
        movieRating,
        movieReview
	}).then((resp)=>{
        alert("Review has heen Update")
    })

};

    return (
        <>
            <h1>MovieUpdate</h1>

            <div>
                <input onChange={(e) => setmovieName(e.target.value)} value={movieName} placeholder="Movie Name" /> <br /><br />
                <input onChange={(e) => setmovieRating(e.target.value)} value={movieRating} placeholder="Movie Rating" /> <br /><br />
                <input onChange={(e) => setmovieReview(e.target.value)} value={movieReview} placeholder="Movie Review" /> <br /><br />

                <button onClick={ update }>Update Review</button>
            </div>
        </>
    );
}

export default MovieUpdate;




// class MovieUpdate extends Component {
//     render() {
//         // console.warn(this.props)
//         let { id } = this.props

//         console.log( this.props );
//         console.log( id );
//         return (
//             <h1>MovieUpdate</h1>
//         );
//     }
// }
//  export default MovieUpdate;