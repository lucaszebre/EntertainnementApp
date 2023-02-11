import React, { useState, useEffect } from 'react';
import './SmallCardStyle.css'
import bookmark1 from '../../assets/icon-bookmark-empty.svg'
import bookmark2 from '../../assets/icon-bookmark-full.svg'
import playButton from '../../assets/icon-play.svg'
const Card = (props) => {
    // make a function to check if the card is bookmarked or not and then fech the data to change the isbookmarked value
    const [isShown, setIsShown] = useState(false);
    const [Newdata, setData] = useState([]);
useEffect(() => {
    fetch('http://localhost:3004/Data')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
}, []);



// function GetBookmark() {
//     var index = 0
// while(Newdata[index].title!== props.title){
//     index++
//     }
//     if(data[index].isBookmarked){
//         fetch(`http://localhost:3004/Data/${index}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ isBookmarked: false }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }else{
//         fetch(`http://localhost:3004/Data/${index}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ isBookmarked: true }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }
// }

    return (
    <>
        <div className="SmallCardContainer" onMouseEnter={()=>setIsShown(true) } onMouseLeave={()=> setIsShown(false)}>
            <img className='SmallImageEntertainnement' src={props.thumbnail} alt="Image-Entertainnement" />
            {isShown && <div className="SmallPlayBlock">
                <img src={playButton} alt="Play-Button" className='PlayButton' />
                <div className="PlayText">Play</div>
            </div> || null}
            <div className="SmallCircleBookmark"  >{props.bookmark && <img  src={bookmark2} alt="BookMark" className='BookMark' /> || <img  src={bookmark1} alt="BookMark" className='BookMark' /> }</div>
            <div className="SmallContainner">
                <div className="SmallCardBlock1">
                    <div className="SmallCardDate">{props.date}</div>
                    <div className="SmallCardType">{props.type}</div>
                    <img src={props.CardLogo} alt="logo-card-svg" className='svg-card' />
                    <div className="SmallCardRating">{props.rating}</div>
                </div>
                <div className="SmallCardBlock2">
                    <div className="SmallCardTitle">{props.title}</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Card
