import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonAppBar from './UI/ButtonAppBar';
import muiTheme from './UI/muiTheme';
import MenuListComposition from './UI/MenuListComposition';
import DetailedExpansionPanel from './UI/DetailedExpansionPanel';


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <ButtonAppBar />
          <MenuListComposition/>
          <DetailedExpansionPanel/>
        </MuiThemeProvider>
      </div>
    );

  }

}


export default App;
