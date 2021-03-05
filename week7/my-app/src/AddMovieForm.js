import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Axios from 'axios'
import {  selectMovies,addMovie, addMovieGenre, addMovieActors,addMovietitle,addMovieYear,addMovieUrl } from "./features/counter/counterSlice"
function AddMovieForm(props) {

    const dispatch = useDispatch();
    // const [ movieTitle,  title ] = useState('');
    // const [ movieGenre, genre ] = useState('');
    // const [ movieActors, actors] = useState('');
    // const [ movieYear,  year ] = useState('');
    // const [ movieUrl, url ] = useState('');
 

    const initialFormValues = {
        title: "",
        genre: "",
        url: "", //url
        releaseYear: "", //year
        mainStars: [], //actors
    
   }
// function capitalize(title) {  

//       var titles = title.split(' ');  
//         var capitalizedtitles = [];  
//         titles.forEach(title => {  
//         capitalizedtitles.push(title[0].toUpperCase() + title.slice(1));  
//         });  
//         return capitalizedtitles.join(' ');  
        
//     }  

    const [inputs, setInputs] = useState(initialFormValues)

    function handleFormChange(e) {
        const {name, value} = e.target
        console.log(value, name)
       
        
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }



    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e, "handling submit")
        // setInputs({...inputs, title:capitalize(inputs.title)})
         dispatch(addMovie(inputs))
        //  [addMovieGenre, addMovieActors,
        // dispatch(addMovietitle,addMovieYear,addMovieUrl ])
        //  test with curly brackets if it doesn't work.   
        // props.addMovie(inputs)
        setInputs(initialFormValues)
    }


    return (
        <form name="addMovieForm" className="movieContainer" onSubmit={handleSubmit}>
            <div className="movieImg">
                <textarea name="url" style={{"width": "140px", "height": "209px"}} 
                    type="text" value={inputs.url} 
                    className="inputEditor"
                    onChange={handleFormChange}/>
            </div>

            <div className="movieDetails">
                <textarea style={{"width": "140px", "height": "35px"}} 
                    placeholder="Movie Title"
                    onChange={handleFormChange}
                    type="text" 
                    name="title" 
                    value={inputs.title} 
                    className="inputEditor" />

                <br/>

                <input style={{"width": "30%"}}
                    placeholder={new Date().getFullYear()}
                    onChange={handleFormChange} 
                    type="number" 
                    name="releaseYear" 
                    value={inputs.releaseYear} 
                    className="inputEditor" />

                <br/>

                <span className="genreAndStars">Genre: </span>

                <select name="genre" value={inputs.genre} onChange={handleFormChange}>
                    <option name="" value="" >Genre:</option>
                    <option name="action" value="action">Action</option>
                    <option name="comedy" value="comedy">Comedy</option>
                    <option name="family" value="family">Family</option>
                    <option name="fantasy" value="fantasy">Fantasy</option>
                </select>

                <br/>

                <span className="genreAndStars">Stars: </span>

                <br/>

                <textarea style={{"width": "140px", "height": "50px"}} 
                    placeholder="Actors"
                    onChange={handleFormChange}
                    type="text" 
                    name="mainStars" 
                    value={inputs.mainStars} 
                    className="inputEditor" />

            </div>

            <button className="addMovie" onClick={handleSubmit}>Add Movie</button>

        </form>
    )
}

export default AddMovieForm