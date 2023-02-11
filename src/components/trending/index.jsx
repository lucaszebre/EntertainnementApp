import React from 'react'
import './TrendingStyle.css'
import Card from '../card'
import data from '../../data.json'
import CardLogoMovie from '../../assets/icon-category-movie.svg'
import CardLogoTv from '../../assets/icon-category-tv.svg'
// import img from '../../assets/thumbnails/beyond-earth/trending/small.jpg'

const Trending = () => {
    
    function AllTrending(){
        return data.map((data, index) => {
            if (data.isTrending){
            return <Card
            key={index} 
            thumbnail={`../../../public/${data.thumbnail.trending.small}`}  //`../.${data.thumbnail.trending.large}`
            date={data.year} 
            type={data.category} 
            rating={data.rating} 
            title={data.title} 
            bookmark={data.isBookmarked}
            // {{data.category === 'movies' && CardLogo={CardLogoMovie} || CardLogo={CardLogoTv}}
            CardLogo={data.category === 'Movie' ? CardLogoMovie : CardLogoTv}
            />
        }
    })
    }
    return (
    <>
        <div className="TrendingContainer">
            <div className="TrendingTitle">Trending</div>
            <div className="TrendingCardContainer">
                {AllTrending()}
                </div>
        </div>
    </>
    )
}

export default Trending
