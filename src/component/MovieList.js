import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

class MovieList extends Component {

    constructor() {

        super();
        this.state = {
            list: null
        }
    }

    componentDidMount() {
        this.getData()
     }

    getData()
    {
        fetch('http://localhost:5000/review').then((res) => {
            res.json().then((result) => {
                // console.warn(result);
                this.setState({
                    list: result
                })
            })
        })
    }


    delete(id){

       let userInput = prompt("Are you sure to delete ? (Y / N)")

    //    alert(userInput);

       if(userInput === 'Y' || userInput === 'y')
       {

         fetch('http://localhost:5000/review/'+id,
        {
            method: "DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Review has been Delete")
                this.getData()
            })
        })

       }
    }

    render() {
        // console.log(this.state.list)
        return (

            <>
                <h1>MovieList</h1>

                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Movie Name</th>
                                        <th>Movie Review</th>
                                        <th>Movie Rating</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                {
                                    this.state.list.map((item, i) =>

                                        <tbody>
                                            <tr>
                                                <td>{++i}</td>
                                                <td>{item.movieName}</td>
                                                <td>{item.movieRating}</td>
                                                <td>{item.movieReview}</td>
                                                <td>
                                                <Link to={"/movieUpdate/"+item.id}><FontAwesomeIcon icon={faPenToSquare} /></Link> &ensp; 
                                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /> </span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    )
                                }
                            </Table>
                        </div>


                        :
                        null
                }

            </>

        );
    }
}

export default MovieList;