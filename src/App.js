import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

const heading = 'Todo App';

function App(){
    console.log(Data);
    return(
        <div>
            <h1 className='headingStyle'>{heading}</h1>
            {Data.map((data, index) => <Card key={index} title={data.title} des={data.des}></Card>)}
        </div>
    );
}

export default App;