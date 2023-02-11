import React from 'react'
import SmallCard from '../smallCard'
import CardLogoMovie from '../../assets/icon-category-movie.svg'
import CardLogoTv from '../../assets/icon-category-tv.svg'
import './BookmarkedStyle.css'
const Bookmarked = (props) => {
    function AllBookmarked() {
        return props.data.map((data => {
            if(data.isBookmarked ){
            return (
                <SmallCard
                thumbnail={`../../../public/${data.thumbnail.regular.medium}`}  
                date={data.year} 
                type={data.category} 
                rating={data.rating} 
                title={data.title} 
                bookmark={data.isBookmarked}
                // {{data.category === 'movies' && CardLogo={CardLogoMovie} || CardLogo={CardLogoTv}}
                CardLogo={data.category === 'Movie' ? CardLogoMovie : CardLogoTv}
                />
            )
            }
        }))
    }
    return (
        <>
        <div className="BookmarkedContainer">
            <div className="BookmarkedWrapper">
                    {AllBookmarked()}
            </div>
        </div>
        </>
    )
}

export default Bookmarked