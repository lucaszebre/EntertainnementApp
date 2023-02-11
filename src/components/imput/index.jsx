import React from 'react'
import search from '../../assets/icon-search.svg'
import './Imputstyle.css'
const Imput = (props) => {
    const onChange = (event) => {
    props.setValue(event.target.value);

    if (event.target.value === '') {
        props.onEmpty();}
    else {
        props.onInput();
        }

    };
    return (
    <>
    <div className="ImputContainer" >
        <div className="ImputWrapper">
            <img src={search} alt="search-logo" className='logo-imput' />
            <input onChange={onChange}   type="text" placeholder="Search for a movie or tv Serie" value={props.value} className='input'/>
        </div>
    </div>
    
    </>
    )
}

export default Imput
