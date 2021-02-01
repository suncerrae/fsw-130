import React, { useState } from 'react'

const Form = (props) => {
    
    const intiInputs = {title: props.title ||"" , image: props.image || "", description: props.description || "" , comments: props.comments || "" }
    const [inputs, setInputs] = useState(intiInputs)
    
    const handleChange = (e) =>{
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.submit(inputs, props.index)
        setInputs(intiInputs)
        props.toggle(true)               
    }

    return(
        <form onSubmit = {handleSubmit} >
            <input 
                type = "text" 
                name = "title"
                placeholder = "Title"
                required
                value = {inputs.title} 
                onChange = {handleChange}>                    
            </input>
           <input 
                type = "text" 
                name = "image"
                placeholder = "image"
                value = {inputs.image}
                required 
                onChange = {handleChange}/>
            <input 
                type = "text" 
                name = "description"
                placeholder = "Description"
                required
                value = {inputs.description} 
                onChange = {handleChange}/> 

            <input 
                type = "text" 
                name = "comments"
                placeholder = "Comment"
                value = {inputs.comments} 
                onChange = {handleChange}/>
                       
            
            <button className = "form-btn">
                {props.btnText}
            </button>   
        
        </form>
    )
}

export default Form