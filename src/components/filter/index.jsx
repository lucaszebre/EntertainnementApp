import React from 'react'
import SmallCard from '../smallCard'

import CardLogoSerie from '../../assets/icon-category-tv.svg'
import CardLogoMovie from '../../assets/icon-category-movie.svg'
import './FilterStyle.css'
const Filter = (props) => {
    function AllFilter() {
        return props.data.map((data => {
            
            return (
                <SmallCard
                thumbnail={`../../../public/${data.thumbnail.regular.medium}`}  
                date={data.year} 
                type={data.category} 
                rating={data.rating} 
                title={data.title} 
                bookmark={data.isBookmarked}
                // {{data.category === 'movies' && CardLogo={CardLogoMovie} || CardLogo={CardLogoTv}}
                CardLogo={data.category === 'Movie' ? CardLogoMovie : CardLogoSerie}
                />
            )
            
        }))
    }

        return (
        <>
        <div className="FilterContainer">
            <div className="FilterWrapper">
                    {AllFilter()}
            </div>
        </div>
        </>
    )
    

}

export default Filter
