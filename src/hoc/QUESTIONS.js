const QUESTIONS = [ 
    {id:1, text:"Any dietary restrictions?", 
        answers: [  {text:"vegan", 
                    scoreChange:{
                        pizza: -5,
                        vegan_pizza: 5,
                        italian: -3, 
                        indian: 5,
                        tapas: -1, 
                        middle_eastern: 5,
                        bbq: -5, 
                        chinese: 3, 
                        thai: 3, 
                        ramen: 1, 
                        breakfast: -1, 
                        american: -2, 
                        mexican: 3, 
                        salad: 3            
                                }}, 
                    {text:"vegetarian", 
                    scoreChange:{
                        pizza: 5,
                        vegan_pizza: 5,
                        italian: 4, 
                        indian: 5,
                        tapas: 2, 
                        middle_eastern: 5,
                        bbq: -5, 
                        chinese: 3, 
                        thai: 3, 
                        ramen: 2, 
                        breakfast: 4, 
                        american: 3, 
                        mexican: 5, 
                        salad: 3            
                                }}, 
                    {text:"lactose intolerant", 
                    scoreChange:{
                        pizza: -5,
                        vegan_pizza: 0,
                        italian: -3, 
                        indian: 5,
                        tapas: 5, 
                        middle_eastern: 5,
                        bbq: 5, 
                        chinese: 5, 
                        thai: 5, 
                        ramen: 5, 
                        breakfast: 3, 
                        american: 5, 
                        mexican: 3, 
                        salad: 3            
                                }},
                    {text:"gluten-free", 
                    scoreChange:{
                        pizza: -5,
                        vegan_pizza: -5,
                        italian: -5, 
                        indian: 2,
                        tapas: 3, 
                        middle_eastern: 3,
                        bbq: 5, 
                        chinese: 4, 
                        thai: 3, 
                        ramen: -5, 
                        breakfast: 4, 
                        american: -2, 
                        mexican: 5, 
                        salad: 3            
                                }}, 
                    {text:"none", 
                    scoreChange:{
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
                        salad: -1            
                                }}]},
    
    {id:2, text:"What's the occassion?", 
        answers: [  {text:"just a casual meal", 
                    scoreChange:{
                        pizza: 2,
                        vegan_pizza: 2,
                        italian: 0, 
                        indian: 0,
                        tapas: -3, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 0, 
                        ramen: 2, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: 0, 
                        salad: 0            
                                }},
                    {text:"fancy date", 
                    scoreChange:{
                        pizza: -5,
                        vegan_pizza: -5,
                        italian: 3, 
                        indian: 1,
                        tapas: 3, 
                        middle_eastern: 1,
                        bbq: -3, 
                        chinese: -2, 
                        thai: 0, 
                        ramen: -1, 
                        breakfast: -5, 
                        american: -3, 
                        mexican: 2, 
                        salad: -5            
                                }},
                    {text:"something in between", 
                    scoreChange:{
                        pizza: -2,
                        vegan_pizza: -2,
                        italian: 0, 
                        indian: 0,
                        tapas: 0, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 0, 
                        ramen: 0, 
                        breakfast: -1, 
                        american: 0, 
                        mexican: 0, 
                        salad: -2            
                                }}]},
    
    {id:3, text:"What's your budget?", 
        answers: [  {text:"$", 
                    scoreChange:{
                        pizza: 5,
                        vegan_pizza: 3,
                        italian: -3, 
                        indian: 0,
                        tapas: -5, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 4, 
                        thai: 3, 
                        ramen: 2, 
                        breakfast: 5, 
                        american: 3, 
                        mexican: 0, 
                        salad: 3            
                                }},
                    {text:"$$", 
                    scoreChange:{
                        pizza: -1,
                        vegan_pizza: -1,
                        italian: 0, 
                        indian: 1,
                        tapas: 0, 
                        middle_eastern: 1,
                        bbq: 1, 
                        chinese: 1, 
                        thai: 1, 
                        ramen: 1, 
                        breakfast: -1, 
                        american: 1, 
                        mexican: 1, 
                        salad: -1            
                                }}, 
                    {text:"$$$", 
                    scoreChange:{
                        pizza: -5,
                        vegan_pizza: -5,
                        italian: 4, 
                        indian: 2,
                        tapas: 5, 
                        middle_eastern: 2,
                        bbq: 0, 
                        chinese: -4, 
                        thai: -3, 
                        ramen: -2, 
                        breakfast: -5, 
                        american: -3, 
                        mexican: 0, 
                        salad: -3            
                                }}]},
    
    {id:4, text:"Are you looking for a quick bite or a proper sit-down?", 
        answers: [  {text:"down for a quickie", 
                    scoreChange:{
                        pizza: 5,
                        vegan_pizza: 5,
                        italian: -4, 
                        indian: -4,
                        tapas: -5, 
                        middle_eastern: 2,
                        bbq: -4, 
                        chinese: 3, 
                        thai: 2, 
                        ramen: 3, 
                        breakfast: 3, 
                        american: 2, 
                        mexican: 2, 
                        salad: 5            
                                }},
                    {text:"let's take it slow", 
                    scoreChange:{
                        pizza: -5,
                        vegan_pizza: -5,
                        italian: 4, 
                        indian: 0,
                        tapas: 5, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 0, 
                        ramen: 0, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: 0, 
                        salad: 0            
                                }}, 
                    {text:"open to anything", 
                    scoreChange:{
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
                                }}]},
    
    {id:5, text:"How hungry are you?", 
        answers: [  {text:"I could eat a whole cow right now", 
                    scoreChange:{
                        pizza: 2,
                        vegan_pizza: 2,
                        italian: 5, 
                        indian: 3,
                        tapas: 2, 
                        middle_eastern: 3,
                        bbq: 4, 
                        chinese: 3, 
                        thai: 3, 
                        ramen: 3, 
                        breakfast: 4, 
                        american: 5, 
                        mexican: 5, 
                        salad: 0            
                                }},
                    {text:"I just want something light", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: 0,
                        tapas: 3, 
                        middle_eastern: 2,
                        bbq: 0, 
                        chinese: 1, 
                        thai: 1, 
                        ramen: 1, 
                        breakfast: 1, 
                        american: 2, 
                        mexican: 0, 
                        salad: 5            
                                }},
                    {text:"I'm hungry", 
                    scoreChange:{
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
                                }}]},
    
    {id:6, text:"How indecisive are you?", 
        answers: [  {text:"enough to rely on quizzes to make my decisions", 
                    scoreChange:{
                        pizza: 3,
                        vegan_pizza: 3,
                        italian: 0, 
                        indian: 0,
                        tapas: 5, 
                        middle_eastern: 0,
                        bbq: 4, 
                        chinese: 0, 
                        thai: 0, 
                        ramen: 0, 
                        breakfast: 0, 
                        american: 3, 
                        mexican: 0, 
                        salad: 0            
                                }},
                    {text:"not that indecisive", 
                    scoreChange:{
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
                                }},
                    {text:"I almost always know what I want", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: 0,
                        tapas: -3, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 0, 
                        ramen: 0, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: 0, 
                        salad: 0            
                                }}]},
    
    {id:7, text:"How adventurous are you?", 
        answers: [  {text:"very", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: 5,
                        tapas: 5, 
                        middle_eastern: 5,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 5, 
                        ramen: 0, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: 5, 
                        salad: 0            
                                }},
                    {text:"somewhat", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: 3,
                        tapas: 3, 
                        middle_eastern: 3,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 3, 
                        ramen: 0, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: 3, 
                        salad: 0            
                                }},
                    {text:"not at all", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: -3,
                        tapas: -3, 
                        middle_eastern: -3,
                        bbq: 0, 
                        chinese: 0, 
                        thai: -3, 
                        ramen: 0, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: -3, 
                        salad: 0            
                                }}]},
    
    {id:8, text:"Do you like spicy foods?", 
        answers: [  {text:"yes", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: 5,
                        tapas: 0, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 5, 
                        ramen: 3, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: 3, 
                        salad: 0            
                                }},
                    {text:"no", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: -5,
                        tapas: 0, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 0, 
                        thai: -5, 
                        ramen: -3, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: -3, 
                        salad: 0            
                                }},
                    {text:"in moderation", 
                    scoreChange:{
                        pizza: 0,
                        vegan_pizza: 0,
                        italian: 0, 
                        indian: 2,
                        tapas: 0, 
                        middle_eastern: 0,
                        bbq: 0, 
                        chinese: 0, 
                        thai: 2, 
                        ramen: 5, 
                        breakfast: 0, 
                        american: 0, 
                        mexican: 5, 
                        salad: 0            
                                }}]}
];

export default QUESTIONS;