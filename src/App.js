import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pageSize = 18;
  const country="in"
  //const apiKey=process.env.REACT_APP_API_KEY;
  const apiKey='c9d00cf36bec455b9bb5360d48b6f8a1'

  const[progress, setProgress]=useState(10)
 
    return (
      
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="general" category="general" />} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="business" category="business"  />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="entertainment" category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="health" category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="science" category="science" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="technology" category="technology" />} />
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="general" category="general" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country}  key="sports" category="sports" />} />
    
        {/*<News />*/}
        </Routes>


        </BrowserRouter>
      </div>
      
    )
  }
export default App;
