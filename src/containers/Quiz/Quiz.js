import React, { Component } from 'react';
import styles from './Quiz.module.css';
import Question from '../../components/Question/Question';
import QUESTIONS from '../../hoc/QUESTIONS';
import RESULTS from '../../hoc/RESULTS';
import Aux from '../../hoc/Aux/Aux';
import Result from '../../components/Result/Result';

class Quiz extends Component {
    state={
        scores:{
            pizza: 0,
            vegan_pizza: 0,
            italian: 0, 
            indian: 0,
            tapas: 0, 
            middle_eastern: 0,
            bbq: 0, 
            chinese: 0, 
            thai: 0, 
            ramen: 0, 
            breakfast: 0, 
            american: 0, 
            mexican: 0, 
            salad: 0            
        },
        showResult: false, 
        result: null,
        resetQuestions: 0,
    }

    updateScoresHandler = (scores) => {
        this.setState(function(prevState, props) {
            let oldScores = {...prevState.scores};
            let newScores = {};
            for(let key in oldScores){
                newScores[key] = oldScores[key]+scores[key];
            }
            return {
              scores: newScores
            };
          });
    }

    showResultHandler = () => {
        let currentScores = {...this.state.scores};
        let finalResult = Object.keys(currentScores).reduce((key1, key2)=> currentScores[key1] > currentScores[key2]? key1 : key2);
        this.setState({result: finalResult, showResult: true});
    }

    playAgainHandler = () => {
        this.setState({
            scores:{
                pizza: 0,
                vegan_pizza: 0,
                italian: 0, 
                indian: 0,
                tapas: 0, 
                middle_eastern: 0,
                bbq: 0, 
                chinese: 0, 
                thai: 0, 
                ramen: 0, 
                breakfast: 0, 
                american: 0, 
                mexican: 0, 
                salad: 0            
            },
            showResult: false, 
            result: null, 
            resetQuestions: this.state.resetQuestions +1
        })
    }

    render(){
        let resultSpace = null; 
        if(this.state.showResult){
            resultSpace = (
                <Result show={this.state.showResult} resultVal={RESULTS[this.state.result].value}
                    resultImg={RESULTS[this.state.result].imgSrc}
                    resultText={RESULTS[this.state.result].text}
                    btnClk={this.playAgainHandler} />
            );
        }
        return(
            <Aux>
                <div className={styles.Quiz}>
                    {resultSpace}
                    <h1>What should I eat for dinner?</h1>
                    {QUESTIONS.map((props)=> <Question text={props.text} 
                                                answers={props.answers} 
                                                key={props.id}
                                                scoreUpdateFunc = {this.updateScoresHandler}
                                                resetQuestions = {this.state.resetQuestions}/>)}
                    <button onClick={this.showResultHandler}>Go</button>
                </div>
            </Aux>
        );
    }
}

export default Quiz; 