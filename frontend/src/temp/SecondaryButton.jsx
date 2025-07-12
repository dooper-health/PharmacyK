import React from 'react'

export default function SecondaryButton(props) {
    return (
        <button className="font-Montserrat font-[600] text-[14px] text-red-500 leading-[116%] bg-pink-100 px-[24px] py-[14px] rounded-[8px] sm:w-[416px] w-[335px]" onClick={()=>{props.action()}}>{props.title}</button>
    )
}