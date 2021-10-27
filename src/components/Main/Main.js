import './Main.css';
import destaqueTitle from './round6.png';
import { IoIosAdd } from 'react-icons/io';
import { IoIosPlay } from 'react-icons/io';
import Swiper from '../Swiper/Swiper';
export default function Main() {
    let cont=1;
    return (
        <div className="main">
            <div className="destaque-container">
                <div className="destaque-conteudo">
                    <img src={destaqueTitle} alt="" className="destaqueTitle" />
                    <div className="buttons-destaque">
                        <button><IoIosPlay className="icon" />Assistir</button>
                        <button><IoIosAdd className="icon" />Minha Lista</button>
                    </div>
                    <div className="description">Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais.</div>
                </div>

            </div>
            <div className="swipers">
                <Swiper id={cont++} />
                <Swiper id={cont++} />
                <Swiper id={cont++} />
                <Swiper id={cont++} />
            </div>
        </div>
    );
}