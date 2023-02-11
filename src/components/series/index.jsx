import React from 'react'
import SmallCard from '../smallCard'
import CardLogoSerie from '../../assets/icon-category-tv.svg'

import './SerieStyle.css'
const Series = (props) => {
    function AllSerie() {
        return props.data.map((data => {
            if(data.category === "TV Series"){
            return (
                <SmallCard
                thumbnail={`../../../public/${data.thumbnail.regular.medium}`}  
                date={data.year} 
                type={data.category} 
                rating={data.rating} 
                title={data.title} 
                bookmark={data.isBookmarked}
                // {{data.category === 'movies' && CardLogo={CardLogoMovie} || CardLogo={CardLogoTv}}
                CardLogo={CardLogoSerie}
                />
            )
            }
        }))
    }

        return (
        <>
        <div className="SeriesContainer">
            <div className="SeriesWrapper">
                    {AllSerie()}
            </div>
        </div>
        </>
    )
    

}

export default Series
