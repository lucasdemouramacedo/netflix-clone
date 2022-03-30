import './Main.css';
import React, { useEffect, useState } from "react";
import destaqueTitle from './round6.png';
import { MdAdd } from 'react-icons/md';
import { IoIosPlay } from 'react-icons/io';
import { BsInfo } from 'react-icons/bs';
import Swiper from '../Swiper/Swiper';
import api from '../../services/api';

export default function Main() {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        api
          .get('genre/movie/list?api_key=bf851eb7632ffe5e76ef37a506ff402e&language=pt-BR')
          .then((response) => setGenres(response.data.genres))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
          
      }, []);

    return (
        <div className="main">
            <div className="destaque-container">
                <div className="destaque-conteudo">
                    <img src={destaqueTitle} alt="" className="destaqueTitle" />
                    <div className="buttons-destaque">
                        <button><MdAdd className="icon" />Minha lista</button>
                        <button><IoIosPlay className="icon" /> Assistir</button>
                        <button><BsInfo className="icon" />Detalhes</button>
                    </div>
                </div>

            </div>
            <div className="swipers">
                {
                    genres.length > 0 ? (genres.map((genre) => (
                        <Swiper key={genre.id.toString()} id={genre.id} titulo={genre.name} />
                ))) : (
                    <p>Carregando...</p>
                )
                }
            </div>
        </div>
    );
}