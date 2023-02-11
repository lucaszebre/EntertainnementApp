import React from 'react'
import SmallCard from '../SmallCard'
import CardLogoMovie from '../../assets/icon-category-movie.svg'
import CardLogoTv from '../../assets/icon-category-tv.svg'
import data from '../../data.json'
import './RecommendStyle.css'

const Recommend = () => {
    
    // write a fucntion that will select random 24 items from the data.json file
    // and return them in a card component


    function getRandomCards(data) {
        const cards = [];
        const randomIndices = [];
        const maxIndex = data.length - 1;
        
        while (cards.length < 24) {
            const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
                cards.push(
                    <SmallCard className="RecommendCard"
                    key={[randomIndex]} 
                    thumbnail={`../../../public/${data[randomIndex].thumbnail.regular.medium}`}  
                    date={data[randomIndex].year} 
                    type={data[randomIndex].category} 
                    rating={data[randomIndex].rating} 
                    title={data[randomIndex].title} 
                    bookmark={data[randomIndex].isBookmarked}
                    // {{data.category === 'movies' && CardLogo={CardLogoMovie} || CardLogo={CardLogoTv}}
                    CardLogo={data[randomIndex].category === 'Movie' ? CardLogoMovie : CardLogoTv}
                    />
                );
            }
            }
            
            return cards;
        }
        



    // function AllRecommend(){
    //     return data.slice(0,23).map((data, index) => {
    //         const randomIndices = [];

            
    //         return (
    //         <Card
    //         key={index} 
    //         thumbnail={`../../../public/${data.thumbnail.regular.small}`}  
    //         date={data.year} 
    //         type={data.category} 
    //         rating={data.rating} 
    //         title={data.title} 
    //         bookmark={data.isBookmarked}
    //         // {{data.category === 'movies' && CardLogo={CardLogoMovie} || CardLogo={CardLogoTv}}
    //         CardLogo={data.category === 'Movie' ? CardLogoMovie : CardLogoTv}
    //         />
            
    //         )
    //     }
    // )}
    return (
    <>
        <div className="RecommendContainer">
        <div className="RecommendTitle">
                    <p>Recommended for you</p>
                    </div>
            <div className="RecommendWrap">
                
                <div className="RecommendCardContainer">
                    
                    {getRandomCards(data)}

                    </div>
            </div>
        </div>
        
    </>
    )
}

export default Recommend
