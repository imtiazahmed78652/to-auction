import React from 'react'

interface ButtonProps {
    onClick?:(e:any)=> void;
    btnText: string,
    className?:string,
}
function Button(props:ButtonProps) {
  return (
    <button className={`${props.className} hover:bg-hover-green ease-in-out delay-100 transform hover:shadow-xl shadow-green  bg-green`} onClick={props.onClick}>{props.btnText}</button>
  )
}

export default Button