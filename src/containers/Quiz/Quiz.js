import React, { Component } from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import QUESTIONS from '../../hoc/QUESTIONS';

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
        }
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

    render(){
        return(
            <div className={styles.Quiz}>
                <h1>What should I eat for dinner?</h1>
                {QUESTIONS.map((props)=> <Question text={props.text} 
                                            answers={props.answers} 
                                            key={props.id}
                                            scoreUpdateFunc = {this.updateScoresHandler}/>)}
                <button>Go</button>
            </div>
        );
    }
}

export default Quiz; 