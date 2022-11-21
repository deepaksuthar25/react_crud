import React, { Component } from 'react';

import { Table, Form, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


class MovieSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: "",
        }
    }

    search(key) {
        // console.warn(key)
        this.setState({ lastSearch: key })

        fetch("http://localhost:5000/searchMovie?movieName=" + key).then((data) => {
            data.json().then((resp) => {

                // console.warn("resp", resp);
                // console.warn("resp", resp.length);
                
                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }
            })
        })
    }

    delete(id) {

        let userInput = prompt("Are you sure to delete ? (Y / N)")
        //    alert(userInput);
        if (userInput === 'Y' || userInput === 'y') {

            fetch('http://localhost:5000/review/' + id,
                {
                    method: "DELETE",
                }).then((result) => {
                    result.json().then((resp) => {
                        alert("Review has been Delete")
                        
                        this.search(this.state.lastSearch)
                    })
                })

        }
    }

    render() {
        return (
            <Container>
                <h2>Movie Search</h2>

                <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search By Movie Name" />

                <div>

                    {

                        this.state.searchData ?
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
                                        this.state.searchData.map((item, i) =>

                                            <tbody>
                                                <tr>
                                                    <td>{++i}</td>
                                                    <td>{item.movieName}</td>
                                                    <td>{item.movieRating}</td>
                                                    <td>{item.movieReview}</td>
                                                    <td>
                                                        <Link to={"/movieUpdate/" + item.id}><FontAwesomeIcon icon={faPenToSquare} /></Link> &ensp;
                                                        <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /> </span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        )
                                    }
                                </Table>
                            </div>
                            :
                            ""
                    }
                    {
                        this.state.noData ? <h3>No Data Found</h3> : null
                    }
                </div>
            </Container>
        );
    }
}

export default MovieSearch;