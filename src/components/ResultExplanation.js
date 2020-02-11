import React, { Component } from 'react';
import './ResultExplanation.css'
class ResultExplanation extends Component {
      render() {
        return (
            <div>
                 <div id="display">  
                 {this.props.result} <br/>
                 {this.props.resultExplanation} <br/>
                 </div>
                

            </div>
        )
    }
}


export default ResultExplanation;
