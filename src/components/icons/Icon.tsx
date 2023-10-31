import React from 'react';
import IconsSprite from "../../assets/images/vector/icons-sprite.svg"


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    stroke?:string
    aria?:boolean
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "24px"} height={props.height || "24px"} viewBox={props.viewBox || "0 0 32 32"} stroke={props.stroke}
             aria-hidden = {props.aria}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconsSprite}#${props.iconId}`}/>
        </svg>
    );
};


