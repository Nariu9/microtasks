import React from 'react';

type InputButtonPropsType = {
    name: string
    callback: () => void
}

export const InputButton = (props: InputButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};