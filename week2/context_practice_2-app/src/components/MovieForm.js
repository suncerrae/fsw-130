import React from "react";
import {MovieContextConsumer} from "../provider/movieContext";


class MovieForm extends React.Component {
    
    state = {
        title: "",
        rated: ""
    }


    handleChange = (e) => { 
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    clearField = (e) => {
        this.setState({
            title: "",
            rated: ""
        })
    }
    

    render() {    
     
        return (
                <MovieContextConsumer> 
                    {({addMovies}) => (
                        <div>  
                            <form>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="New Movie Title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    name="rated"
                                    placeholder="Rated G, PG, PG-13, R"
                                    value={this.state.rated}
                                    onChange={this.handleChange}
                                />
                                <button 
                                onClick={(e) => {addMovies(e, this.state); this.clearField()}}
                                type="submit"
                                >Add Movie</button>
                            </form>
                        </div> 
                    )}
                </MovieContextConsumer>
        )
    }
}

export default MovieForm;