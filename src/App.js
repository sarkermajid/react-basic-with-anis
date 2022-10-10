import React from "react";
import Card from "./components/Card";

const heading = 'Todo App';

function App(){
    return(
        <div>
            <h1 className='headingStyle'>{heading}</h1>
            <Card cardTitle='Card One' cardDes='card description 1'></Card>
            <Card cardTitle='Card Two' cardDes='card description 2'></Card>
            <Card cardTitle='Card Three' cardDes='card description 3'></Card>
            <Card cardTitle='Card Four' cardDes='card description 4'></Card>
        </div>
    );
}

export default App;