import React, {Component} from 'react'
import StoreContext from './Context'

class StoreProvider extends Component {

    constructor(){
        super()
        this.state={
            uglyData: []            
        }
    }

    handleAddUgly = (data) => {
        this.setState({uglyData: [...this.state.uglyData, data]})       
    }

    handleRemoveUgly = (i) => {
        let uglyArray = this.state.uglyData
        uglyArray.splice(i, 1)
        this.setState({uglyData: uglyArray})
    }
    handleEditUgly = (edits,  i) => {
        let newUgly = [...this.state.uglyData]
        newUgly[i] = edits
        this.setState({uglyData: newUgly})
    }

    render(){
        return(
            <StoreContext.Provider
                value={{
                    ...this.state,
                    uglyData: this.state.uglyData,
                    comments: this.state.comments,
                    handleAddUgly : this.handleAddUgly,
                    handleRemoveUgly: this.handleRemoveUgly,
                    handleEditUgly: this.handleEditUgly,
                }}
            >
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export default StoreProvider