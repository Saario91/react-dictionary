import React from 'react';
import './Photos.css'

export default function Photos(props){
    if(props.photos){
    console.log(props);
    return(
        <div className='Photos'>
            <div className='row'>
            {props.photos.map(function(photo, index){
                return(
                    <div className='col-4' key={index}>
                    <a href={photo.url} target='_blank' rel='noreferrer'>
                    <img src={photo.src.landscape} key={index} alt='placeholder' className='img-fluid'/>
                    </a>
                    </div>
            
                )
            })}
            </div>
        </div>
    )
    }else{
        return null;
    }
}