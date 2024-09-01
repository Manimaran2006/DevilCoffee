import Image1 from './item1.jpeg';
import Image2 from './item2.jpeg';
import Image3 from './item3.webp';
import Image4 from './item4.jpeg';
import Event1 from './Event1.jpg'
import Event2 from './Event2.avif'
import Event3 from './Event3.avif'

const Picture = 
{
    Event1,
    Event2,
    Event3
}

const Img = {
    Image1,
    Image2,
    Image3,
    Image4
}

export const Data = [

    {Name:"Coffee",Price:"Rs.90",Offer:"Rs.60",Img:Image1},
    {Name:"Coffee",Price:"Rs.60",Offer:"Rs.40",Img:Image2},
    {Name:"Cold Coffee",Price:"Rs.120",Offer:"Rs.80",Img:Image3},
    {Name:"Cappuccino",Price:"Rs.200",Offer:"Rs.140",Img:Image4},

]

export const Info = [
    
    {Event:"High Count of Coffee",Condition:"Single man performn in a event and to get drink for a high count of coffee",Price:"one week drink for a free coffee",Picture:Event1},
    {Event:"Drink Fast In Coffee",Condition:"Single man perform in a event and to get drink for less time complexcity of coffee",Price:"one coffee drink for a free coffee",Picture:Event2},
    {Event:"Pair Coffee",Condition:"One pair performn in a event and to get drink hogh count  of coffee",Price:"Coffee Cup(pair design cup)",Picture:Event3}

]

export default Img;