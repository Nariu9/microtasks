import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    /* const Button1Foo = (subscriber:string, age:number, address:string) => {
         console.log(subscriber, age, address)
     }

     const Button2Foo = (subscriber:string) => {
         console.log(subscriber)
     }

     const Button3Foo = () => {
         console.log("I'm stupid button")
     }*/

    /*let a = 1*/
    let[a, setA] = useState(1)

    const onClickHandler =()=> {
        setA(++a);
        console.log(a)
    }

    const toZero =()=> {
        setA(0);
        console.log(a)
    }


    return (
        <div className="App">
            {/* <Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo("I'm Vasya", 21, "Live in Minsk")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo("I'm Ivan")}/>
            <Button name={"Yo Yo"} callBack={Button3Foo}/>*/}
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={toZero}>0</button>

        </div>
    );
}

export default App;

/*const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
])*/
