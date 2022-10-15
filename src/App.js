import React from "react";
import Card from "./components/Card";
import cardData from "./data";
import Card2 from "./components/card2";
import { FaReact, FaYoutube, FaFacebookMessenger } from "react-icons/fa";

const heading = 'Todo App';
function App(){
    return(
        <div>
            <h1 className='headingStyle'>{heading}</h1>
            {cardData.map(data => <Card key={data.id} title={data.title} des={data.des}></Card>)}
            <Card2 name='Sarker Majid'></Card2>
            <FaReact className="icon"></FaReact>
            <FaYoutube className="icon"></FaYoutube>
            <FaFacebookMessenger className="icon"></FaFacebookMessenger>
        </div>
    );
}

export default App;