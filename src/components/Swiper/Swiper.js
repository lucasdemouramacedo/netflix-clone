import SwiperItem from "../SwiperItem/SwiperItem";
import './Swiper.css';
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Swiper(props) {
    let cont=1;
    const [scroll, setScroll] = useState(0);
    const [scrollW, setScrollW] = useState(0);
    const [screenW, setScreenW] = useState(0);
    window.addEventListener('load', () => setScrollW(document.querySelector(`#swiper${props.id}`).scrollWidth - document.querySelector(`#swiper${props.id}`).clientWidth));
    window.addEventListener('resize', () => setScrollW(document.querySelector(`#swiper${props.id}`).scrollWidth - document.querySelector(`#swiper${props.id}`).clientWidth));
    window.addEventListener('load', () => setScreenW(document.querySelector(`#swiper${props.id}`).clientWidth));
    window.addEventListener('resize', () => setScreenW(document.querySelector(`#swiper${props.id}`).clientWidth));
    useEffect(() => {
        if (scroll > 100) {
            document.getElementById(`s-left${props.id}`).style.width = '40px';
        } else {
            document.getElementById(`s-left${props.id}`).style.width = '0px';
        }
        if (scroll >= scrollW - 60) {
            document.getElementById(`s-right${props.id}`).style.width = '0px';
        } else {
            document.getElementById(`s-right${props.id}`).style.width = '40px';
        }
        const val = document.querySelector(`#tituloSwiper${props.id}`);
        val.innerHTML = `Titulo lista ${scroll} e ${scrollW} e ${screenW}`;
        document.querySelector(`#swiper${props.id}`).scrollTo( scroll, 0 );

    });

    return (
        <div className="row">
            <span className="tituloSwiper" id={`tituloSwiper${props.id}`} ></span>
            <div className="swiper" id={`swiper${props.id}`} onScroll={() => setScroll(scrollerFunc(`#swiper${props.id}`))}>
                <div className="buttons">
                    <div className="button-slide s-left" id={`s-left${props.id}`} onClick={() => setScroll(scroll-((screenW)*0.663))}><IoIosArrowBack className="icon" /></div>
                    <div className="button-slide s-right" id={`s-right${props.id}`} onClick={() => setScroll(scroll+((screenW)*0.663))}><IoIosArrowForward className="icon" /></div>
                </div>
                <div className="swiperItems">
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                    <SwiperItem num={cont++}/>
                </div>
            </div>
        </div>
    );

}

function scrollerFunc(param) {
    const scroller = document.querySelector(param);
    return scroller.scrollLeft;
}