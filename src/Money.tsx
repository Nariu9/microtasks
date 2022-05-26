import React from "react";

type MoneyPropsType = {
    currentMoney:Array<currentMoneyType>
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
        </>
    )
}