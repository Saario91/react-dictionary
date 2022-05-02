import React from 'react';

export default function Phonetic(props){
    return(<div className='Phonetic'>
        <a href={props.phonetic.audio} target='_blank' rel='noreferrer'>
            Listen
        </a>
        <span>{props.phonetic.text}</span>
    </div>)
}