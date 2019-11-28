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

function App() {
  return (
    <div className="App">

      <div className="twoColumns">
        <div className="leftColumn">
          <Header />
          <MenuList />
          <Searchbox />
          <Welcome />
          <FollowMeLeftMenu />
        </div>
        <div className="rightColumn">
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
        </div>
      </div>

    </div>
  );
}

export default App;
