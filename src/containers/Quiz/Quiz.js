import React, { Component } from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';

const QUESTIONS = [ 
    {id:1, text:"Any dietary restrictions?", 
        answers: [  {text:"vegan", scoreChange:0}, 
                    {text:"vegetarian", scoreChange:0}, 
                    {text:"lactose intolerant", scoreChange:0},
                    {text:"gluten-free", scoreChange:0}, 
                    {text:"none", scoreChange:0}]},
    
    {id:2, text:"What's the occassion?", 
        answers: [  {text:"just a casual meal", scoreChange:0},
                    {text:"fancy date", scoreChange:0},
                    {text:"something in between", scoreChange:0}]},
    
    {id:3, text:"What's your budget?", 
        answers: [  {text:"$", scoreChange:0},
                    {text:"$$", scoreChange:0}, 
                    {text:"$$$", scoreChange:0}]},
    
    {id:4, text:"Are you looking for a quick bite or a proper sit-down?", 
        answers: [  {text:"down for a quickie", scoreChange:0},
                    {text:"let's take it slow", scoreChange:0}, 
                    {text:"open to anything", scoreChange:0}]},
    
    {id:5, text:"How hungry are you?", 
        answers: [  {text:"I could eat a whole cow right now", scoreChange:0},
                    {text:"I just want something light", scoreChange:0},
                    {text:"I'm hungry", scoreChange:0}]},
    
    {id:6, text:"How indecisive are you?", 
        answers: [  {text:"enough to rely on a quizzes to make my decisions", scoreChange:0},
                    {text:"not that indecisive", scoreChange:0},
                    {text:"I almost always know what I want", scoreChange:0}]},
    
    {id:7, text:"How adventurous are you?", 
        answers: [  {text:"very", scoreChange:0},
                    {text:"somewhat", scoreChange:0},
                    {text:"not at all", scoreChange:0}]},
    
    {id:8, text:"Do you like spicy foods?", 
        answers: [  {text:"yes", scoreChange:0},
                    {text:"no", scoreChange:0},
                    {text:"in moderation", scoreChange:0}]}
];

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

    render(){
        return(
            <div className={styles.Quiz}>
                <h1>What should I eat for dinner?</h1>
                {QUESTIONS.map((props)=> <Question text={props.text} answers={props.answers} key={props.id}/>)}
                <button>Go</button>
            </div>
        );
    }
}

export default Quiz; 