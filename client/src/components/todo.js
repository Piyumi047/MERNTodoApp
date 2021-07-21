/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'

export default class todo extends Component {
    style =()=>{
        const {complete }= this.props.tdo
        return {textDecoration: complete ? "line-through":"none"}
    }

    render() {
        const {title}=this.props.tdo
        return (
        
              
            <h3 className="text-dark text-center p-1 mx-auto bg-light border-bottom" style={this.style()}> 
               <i className="icon-remove-circle fa-sm  m-12 text-danger "></i> 
                {title}
                <input type="checkbox" className="float-right m-12" />
            </h3> 
    
        )
    }
}
