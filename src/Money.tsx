import React from "react";

type FilterTyle = 'All' | 'RUBLS' | 'Dollars'

type MoneyPropsType = {
    currentMoney:Array<currentMoneyType>
    callback:(a:FilterTyle)=>void

}

type currentMoneyType = {
    banknots:string,
    value:number,
    number:string
}

export const Money = (props:MoneyPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span> {el.banknots}</span>
                            <span> {el.value}</span>
                            <span> {el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.callback("All")}>All</button>
                <button onClick={() => props.callback("RUBLS")}>RUBLS</button>
                <button onClick={() => props.callback("Dollars")}>Dollars</button>
            </div>
        </>
    )
}