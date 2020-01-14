import React from 'react';
//import logo from '../logo.svg';
import './App.css';
// import komponentów:
import Header from '../Header';
import MenuList from '../MenuList';
import Info from '../Info';
import SmallTitle from '../SmallTitle';
import ShowMore from '../ShowMore';
import Subsection from '../Subsection';
import FollowMe from '../FollowMe';
import Searchbox from '../Searchbox';
import Welcome from '../Welcome';
import FollowMeLeftMenu from '../FollowMeLeftMenu';
import Category from '../Category';
//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <div className="twoColumns">
        
        <div className="leftColumn">
          <Header />
          <Router>
          <MenuList />
          </Router>
          <Searchbox />
          <Welcome />
          <FollowMeLeftMenu />
        </div>
        
        <div className="rightColumn">
          <Router>           
          <Switch>
            <Route path="/">
              <Info />
              <div className="section">
                <SmallTitle st='nowe wpisy:' />
                <ShowMore type="NoweWpisy" />
                <Subsection type="NoweWpisy" />
              </div>
              <div className="section">
                <SmallTitle st='popularne wpisy:' />
                <ShowMore type="PopularneWpisy" />
                <Subsection type="NoweWpisy" />
              </div>
              <div className="section">
                <FollowMe />
              </div>
              <div className="section">
                <SmallTitle st='przepisy wegańskie:' />
                <ShowMore type="PrzepisyWeganskie" />
                <Subsection type="PrzepisyWeganskie" />
              </div>
              <div className="section">
                <SmallTitle st='szybkie dania:' />
                <ShowMore type="SzybkieDania" />
                <Subsection type="SzybkieDania" />
              </div>
              <div className="section">
                <SmallTitle st='dla początkujących:' />
                <ShowMore type="DlaPoczatkujacych" />
                <Subsection type="DlaPoczatkujacych" />
              </div>
              <div>
                <br></br><br></br>
              </div>
              </Route>
              
              <Route path="/kategorie">
                <div><h1> Kategorie </h1></div>
              </Route>
              <Route path="/skladniki">
                <h1> Skladniki </h1>
              </Route>
              <Route path="/poryRoku">
                <h1> Pory Roku </h1>
              </Route>
              <Route path="/okazje">
                <h1> Okazje </h1>
              </Route>
              <Route path="/podstawyWege">
                <h1> Podstawy diety roslinnej </h1>
              </Route>
               <Route path="/wszystkiePrzepisy">
                <h1> Wszystkie przepisy </h1>
              </Route>
              <Route path="/about">
                <h1> About </h1>
              </Route>
              </Switch>
          </Router>
         </div> 
         </div>

    </div>
  );
}

//export default App;
