import './App.css';
import React, { Component }from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import {useState} from 'react'

export default class App extends Component {
  pageSize = 18;
  country="in";
  //apiKey=process.env.APIKEY;
  apiKey='c9d00cf36bec455b9bb5360d48b6f8a1'
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="general"} />} />
        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="business" } />} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="entertainment"} />} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="health"} />} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="science"} />} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="technology"} />} />
        <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="general"} />} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country={this.country} category={this.category="sports"} />} />
    
        {/*<News />*/}
        </Routes>


        </BrowserRouter>
      </div>
      
    )
  }
}
