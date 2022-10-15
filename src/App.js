import React from "react";
import Card from "./components/Card";
import cardData from "./data";
import Card2 from "./components/card2";

const heading = 'Todo App';
function App(){
    return(
        <div>
            <h1 className='headingStyle'>{heading}</h1>
            {cardData.map(data => <Card key={data.id} title={data.title} des={data.des}></Card>)}
            <Card2 name='Sarker Majid'></Card2>
        </div>
    );
}

export default App;