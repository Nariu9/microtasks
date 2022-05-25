import React from "react";
import './NewComponent.css';

type NewComponentPropsType = {
    //students:Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <table>
                {topCars.map((element, index) => {
                    return (
                        <tr key={index + 1}>
                            <th>{element.manufacturer}</th>
                            <td>{element.model}</td>
                        </tr>
                    )
                })}
            </table>
            <ul>
                {props.students.map(el => <li key={el.id}>Students name: {el.name}, students age: {el.age}</li>)}
            </ul>
        </>
    )
}