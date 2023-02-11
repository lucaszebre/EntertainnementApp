import React, { useState, useEffect } from 'react';
import './App.css'
import Sidebar from './components/sidebar'
import Imput from './components/imput'
import Trending from './components/trending'
import Recommend from './components/recommend'
import Movie from './components/movie'
import Series from './components/series'
import Bookmarked from './components/bookmarked'



import Filter from './components/filter'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {


const [input, setInput] = React.useState(false)

function handleInput() {
  setInput(true)
}

function Emptyinput() {
  setInput(false)
}
const [value, setValue] = React.useState('');

const [data, setData] = useState([]);

useEffect(() => {
    fetch('http://localhost:3004/Data')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
}, []);




  return (
    <Router>
    <div className="AppContainer">
      <Sidebar />
      <div className="AppWrap">
        <Imput 
        onInput={handleInput}
        onEmpty={Emptyinput}
        value={value}
        setValue={setValue}
        />
        
            <Routes>
              {!input &&
              <Route path="/" element={
                <> 
                <Trending 
                
                />
                <Recommend 
            />
                
                </>
              }/>   || 
              <Route path="/" element={
              <Filter
              data={data.filter((val) => {
                if(value === ''
                ){
                  return val
                } else if (val.title.toLowerCase().includes(value.toLowerCase())) {
                  return val
                }
              })} />} /> }
                
                {!input && <Route path="/movie" element={<Movie 
                data={data}  />}/> || <Route path="/movie" element={
                <Filter data={data.filter((val) => {
                  if(val.category === 'Movie'){
                  if(value === ''
                  ){
                    return val
                  } else if (val.title.toLowerCase().includes(value.toLowerCase())) {
                    return val
                  }
                }})}
                type='movie'
                />} /> }
                {/* <Route path="/movie" element={<Movie />}/> */}
                {!input && <Route path="/serie" element={<Series 
                data={data} />}/> || <Route path="/serie" element={
                <Filter data={data.filter((val) => {
                  if(val.category === 'TV Series'){
                  if(value === ''
                  ){
                    return val
                  } else if (val.title.toLowerCase().includes(value.toLowerCase())) {
                    return val
                  }
                }
                })}
        
                type='serie'
                />} /> }

                {!input && <Route path="/bookmarked" element={<Bookmarked 
                data={data} />}/> || <Route path="/bookmarked" element={
                <Filter data={data.filter((val) => {
                  if(val.isBookmarked ){
                  if(value === ''
                  ){
                    return val
                  } else if (val.title.toLowerCase().includes(value.toLowerCase())) {
                    return val
                  }
                }
                })}
                type='bookmarked'
                />} /> }
                




            </Routes>
          
      </div>
    </div>
    </Router>
    
  )
}

export default App
