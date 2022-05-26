
type MoneyButtonPropsType = {
    name:string,
    callback:()=>void
}

export const MoneyButton =(props:MoneyButtonPropsType)=> {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}