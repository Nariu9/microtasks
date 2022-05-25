import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Money} from "./Money";

/*import {Button} from "./components/Button";*/

type FilterTyle = 'All' | 'RUBLS' | 'Dollars'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterTyle>("All")

    let currentMoney = money;

    if (filter === "RUBLS"){
        currentMoney = money.filter(filtredMoney=>filtredMoney.banknots==="RUBLS")
    } else if (filter === "Dollars") {
        currentMoney = money.filter(filtredMoney=>filtredMoney.banknots==="Dollars")
    }



    const onClickFilterHandler =(nameButton:FilterTyle)=> {
        setFilter(nameButton)
    }

    return (
        <>
            <Money currentMoney={currentMoney} callback={onClickFilterHandler}/>
            {/*<ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span> {el.banknots}</span>
                            <span> {el.value}</span>
                            <span> {el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:"35px"}}>
                <button onClick={()=>onClickFilterHandler("All")}>All</button>
                <button onClick={()=>onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={()=>onClickFilterHandler("Dollars")}>Dollars</button>
            </div>*/}
        </>
    );
}

export default App;


//Microtask 3

/* const Button1Foo = (subscriber:string, age:number, address:string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log("I'm stupid button")
    }*/

{/* <Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo("I'm Vasya", 21, "Live in Minsk")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo("I'm Ivan")}/>
            <Button name={"Yo Yo"} callBack={Button3Foo}/>*/
}


//Microtask 4

/* let[a, setA] = useState(1)

   const onClickHandler =()=> {
       setA(++a);
       console.log(a)
   }

   const toZero =()=> {
       setA(0);
       console.log(a)
   }*/

{/*<h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={toZero}>0</button>*/
}