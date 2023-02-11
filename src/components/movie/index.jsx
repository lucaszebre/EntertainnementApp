import React from 'react'
import SmallCard from '../smallCard'
import CardLogoMovie from '../../assets/icon-category-movie.svg'
import './MovieStyle.css'
const Movie = (props) => {
    function AllMovie() {
        return props.data.map((data => {
            if(data.category === 'Movie'){
            return (
                <SmallCard
                thumbnail={`../../../public/${data.thumbnail.regular.medium}`}  
                date={data.year} 
                type={data.category} 
                rating={data.rating} 
                title={data.title} 
                bookmark={data.isBookmarked}
                // {{data.category === 'movies' && CardLogo={CardLogoMovie} || CardLogo={CardLogoTv}}
                CardLogo={CardLogoMovie}
                />
            )
            }
        }))
    }
    return (
        <>
        <div className="MovieContainer">
            <div className="MovieWrapper">
                    {AllMovie()}
            </div>
        </div>
        </>
    )
}

export default Movie
