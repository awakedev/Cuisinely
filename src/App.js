import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import BasicExample from './components/datamap/basic-example';

import './App.css';

var cors = require('cors')
 

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
        <BasicExample/>

      </MuiThemeProvider>
      
     

     
    );
  }
}

export default App;
