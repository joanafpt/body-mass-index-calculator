import React, { Component } from 'react';
import imcService from '../services/imcService';
import ResultExplanation from './ResultExplanation';
import './ImcCalculator.css'

class ImcCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
            displayedResult: null
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        //grab the name using e.target
        this.setState({
            [event.target.name]: event.target.value //atribuir ao e target name o value do input do user

        });
    }
    onSubmit(event) {
        event.preventDefault();
        //  imcService.ImcCalculator(this.state.height, this.state.weight);

        //para o resultado da ImcCalculator() estar disponivel aqui, tem de se guardado:

        const res = imcService.imcCalculator(this.state.height, this.state.weight);
        const resultForDisplay = imcService.imcQualitativeEvaluation(res);

        this.setState({
            displayedResult: res,
            resToDisplay: resultForDisplay
        });
    }


    render() {
        return (
            <div>
                <form class="form-horizontal inputForm" onSubmit={this.onSubmit} >
                    <div>
                        <label>Altura:</label><br />
                        <input name="height"
                            type="number"
                            step="0.01"
                            min='0'
                            max='2.50'
                            id="h"
                            placeholder="Insira a sua altura aqui. Ex.: 1,70"
                            value={this.state.height}
                            onChange={this.onChange} />
                        {  /*  <br />   */}
                    </div>
                    <div>
                        <label>Peso:</label><br />
                        <input name="weight"
                            type="number"
                            step="0.01"
                            min='0'
                            max='300'
                            id="w"
                            placeholder="Insira o seu peso aqui. Ex.: 60"
                            //atençao q aqui tem de coincidir o nome do input com o state (weight, neste caso. estava body e por isso n dava p escrever no form)
                            onChange={this.onChange}
                            value={this.state.weight} />
                    </div>
                    <br />

                    <div className="form-row text-center">
                        <div class="col-12">
                            <button className='btn btn-default '
                                type="submit"
                                id="submit-weight">Submeter</button>
                        </div> </div>
                </form>


                <ResultExplanation
                    result={this.state.displayedResult}
                    resultExplanation={this.state.resToDisplay}
                />
                <div>
                </div>
            </div>



        )
    }
}


export default ImcCalculator;