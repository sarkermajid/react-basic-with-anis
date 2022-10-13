import React from "react";
import Card from "./components/Card";
import cardData from "./data";

const heading = 'Todo App';
function App(){
    return(
        <div>
            <h1 className='headingStyle'>{heading}</h1>
            {cardData.map(data => <Card key={data.id} title={data.title} des={data.des}></Card>)}
        </div>
    );
}

export default App;