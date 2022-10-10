import React from "react";
import Card from "./components/Card";

const heading = 'Todo App';

function App(){
    return(
        <div>
            <h1 className='headingStyle'>{heading}</h1>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}

export default App;