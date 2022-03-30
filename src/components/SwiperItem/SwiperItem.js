import React from 'react';
import './SwiperItem.css';

export default function SwiperItem(props){
    return(
        <div className="item" >
            
            <img className='image' alt='Teste' src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`}></img>
            <div className='item-footer'>

            </div>
        </div>
    );
}