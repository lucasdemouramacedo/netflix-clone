import React from 'react';
import './SwiperItem.css';

export default function SwiperItem(props){
    return(
        <div className="item">
            <h1>{props.num}</h1>
        </div>
    );
}