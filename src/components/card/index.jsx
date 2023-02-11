import React, { useState, useEffect } from 'react';
import './CardStyle.css'
import bookmark1 from '../../assets/icon-bookmark-empty.svg'
import bookmark2 from '../../assets/icon-bookmark-full.svg'
import playButton from '../../assets/icon-play.svg'
const Card = (props) => {
    // make a function to check if the card is bookmarked or not and then fech the data to change the isbookmarked value

    const [isShown, setIsShown] = useState(false);
    








    return (
    <>
        <div className="CardContainer" onMouseEnter={()=>setIsShown(true) } onMouseLeave={()=> setIsShown(false)}>
            <div className="ImgContainer"><img className='ImageEntertainnement' src={props.thumbnail} alt="Image-Entertainnement" /></div>
            {isShown && <div className="PlayBlock">
                <img src={playButton} alt="Play-Button" className='PlayButton' />
                <div className="PlayText">Play</div>
            </div> || null}
            <div className="CircleBookmark"  >{props.bookmark && <img src={bookmark2} alt="BookMark" className='BookMark' /> || <img src={bookmark1} alt="BookMark" className='BookMark' /> }</div>
            <div className="Containner">
                <div className="CardBlock1">
                    <div className="CardDate">{props.date}</div>
                    <div className="CardType">{props.type}</div>
                    <img src={props.CardLogo} alt="logo-card-svg" className='svg-card' />
                    <div className="CardRating">{props.rating}</div>
                </div>
                <div className="CardBlock2">
                    <div className="CardTitle">{props.title}</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Card
