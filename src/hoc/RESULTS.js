import americanImg from '../images/american.jpg';
import bbqImg from '../images/bbq.jpg';
import breakfastImg from '../images/breakfast.jpg';
import chineseImg from '../images/chinese.jpg';
import indianImg from '../images/indian.jpg';
import italianImg from '../images/italian.jpg';
import mexicanImg from '../images/mexican.jpg';
import middle_easternImg from '../images/middle_eastern.jpg';
import pizzaImg from '../images/pizza.jpg';
import ramenImg from '../images/ramen.jpg';
import saladImg from '../images/salad.jpg';
import tapasImg from '../images/tapas.jpg';
import thaiImg from '../images/thai.jpg';
import vegan_pizzaImg from '../images/vegan_pizza.jpg';


const RESULTS = {
    pizza: {value: 'Pizza', text: 'You can never go wrong with pizza.', imgSrc: pizzaImg},
    vegan_pizza: {value: 'Vegan Pizza', text: 'You can never go wrong with pizza.', imgSrc: vegan_pizzaImg},
    italian: {value: 'Italian Food', text: 'Time to indulge on allllll the carbs!', imgSrc: italianImg}, 
    indian: {value: 'Indian Food', text: 'Can you handle all that spice?', imgSrc: indianImg},
    tapas: {value: 'Tapas', text: 'So much to choose from! Perfect for the indecisive.', imgSrc: tapasImg}, 
    middle_eastern: {value: 'Middle Eastern Food', text: "Yummy falafel or shawarma? Yes, please.", imgSrc: middle_easternImg},
    bbq: {value: 'BBQ', text: 'Time for a quick trip to Texas.', imgSrc: bbqImg}, 
    chinese: {value: 'Chinese Food', text: 'An oldie but a goodie.', imgSrc: chineseImg}, 
    thai: {value: 'Thai Food', text: 'I hope you like spicy food!', imgSrc: thaiImg}, 
    ramen: {value: 'Ramen', text: "It's good for the soul.", imgSrc: ramenImg}, 
    breakfast: {value: 'Breakfast Foods', text: 'Time to head to the nearest diner!', imgSrc: breakfastImg}, 
    american: {value: 'American Food', text: 'Go get yourself some burgers and onion rings!', imgSrc: americanImg}, 
    mexican: {value: 'Mexican Food', text: '...and  maybe order some margaritas too.', imgSrc: mexicanImg}, 
    salad: {value: 'a Salad', text: "Looks like you're eating light and healthy tonight!", imgSrc: saladImg}            
};

export default RESULTS;