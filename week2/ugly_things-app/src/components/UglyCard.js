import React, {useState} from 'react'
import Form from './Form'

const UglyCard = (props)=> { 
    
    const {title, image, description, comments,handleRemoveUgly,handleEditUgly, index} = props
    const [ editToggle, setEditToggle ] = useState(true) 
    
    const handleToggle = (toggle) =>{
        setEditToggle(toggle)
    }    
    return(
        <div className = "uglies">            
            { editToggle ? 
                <>  
                    { (image !== "" || null) && (title !== "" || null ) && (description !== "" || null)? 
                        <>  
                            <div className= "image">
                                <img src = {image} alt="random pic"/>
                                <div className = "p-div">
                                    <p className = "title">{title} </p> 
                                    <p className = "description">{description} </p> 
                                    {comments !== '' ? <p className = "comment-p"><q>{comments}</q> </p>: null}
                                </div>
                               
                                <div className = 'comment'>
                                    <div className = "button-div">
                                        <button 
                                            className = "edit-btn"
                                            onClick = {() => setEditToggle(prevToggle => !prevToggle)}>
                                            Edit
                                        </button>

                                        <button className = "del-btn" onClick= {()=> handleRemoveUgly(index)}>
                                            Delete
                                        </button>
                                    </div> 
                                </div> 
                            </div>
                            
                        </>
                    : null
                    } 
                </>
            :
                <>
                    <div className = "edit-div"> 
                        <Form
                            title = {title}
                            image = {image}
                            description = {description}
                            comments = {comments}
                            index = {index}
                            btnText = "Submit Edit"                        
                            toggle = {handleToggle}
                            submit = {handleEditUgly}
                        /> 
                        <button 
                            className="close-btn"
                            onClick = {() => setEditToggle(prevToggle => !prevToggle)}>
                            Close Edit
                        </button>
                    </div>
                    
                </>
            }
        </div>            
    )
}

export default UglyCard