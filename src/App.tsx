import React, {useState} from 'react';
import './App.css';
/*import {FullInput} from "./components/FullInput";*/
import {Input} from "./components/Input";
import {InputButton} from "./components/InputButton";


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*/!*<FullInput addMessage={addMessage}/>*!/ // microtask 6, part 1*/}
            {/*<div>
                <input/>
                <button>+</button>
            </div>*/}
            <Input setTitle={setTitle} title={title}/>
            <InputButton name={'+'} callback={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;


