import React, {useContext} from 'react'
import PostForm from './Form'
import Context from '../provider/Context'
import UglyCard from './UglyCard'


const LoadPosts = () => { 
    const props = useContext(Context)
    return(
        <div className = "main" >
            <div className = "container">          
                <div className="main-form">
                    <PostForm
                        submit = {props.handleAddUgly}
                        btnText = "Add Ugly"          
                        toggle = {()=>{}}
                    />
                </div>
                
                <div className = "ugly-data" >            
                    {props.uglyData.map((data, i) => 
                        <UglyCard 
                            {...data} 
                            key = {i}
                            index = {i}
                            handleRemoveUgly = {props.handleRemoveUgly}
                            handleEditUgly = {props.handleEditUgly}                              
                        />)
                    }
                </div>          
            </div>
        </div> 
    )
}

export default LoadPosts