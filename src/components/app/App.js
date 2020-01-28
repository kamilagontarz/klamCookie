import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from '../About';
import DishMainPage from '../DishMainPage';
import FollowMe from '../FollowMe';
import FollowMeLeftMenu from '../FollowMeLeftMenu';
import Header from '../Header';
import Info from '../Info';
import MenuList from '../MenuList';
import Section from '../Section';
import ShowMoreList from '../ShowMoreList';
import VegeBasics from '../VegeBasics';
import Welcome from '../Welcome';
import './App.css';
import EventEmitter from '../../events';


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition // eslint-disable-line no-undef, no-use-before-define
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList // eslint-disable-line no-undef, no-use-before-define

const actions = ['następny', 'następny krok', 'dalej', 'wróć', 'wstecz', 'poprzedni', 'poprzedni krok'];
const grammar = '#JSGF V1.0; grammar actions; public <action> = ' + actions.join(' | ') + ' ;'

const init = () => {
  const recognition = new SpeechRecognition()
  const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.continuous = true;
  recognition.lang = 'pl-PL';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  return recognition;
}

export default function App() {
  const [speechRecognisionActive, setSpeechRecognisionActive] = useState(false);
  const [recognition] = useState(init());

  const startRecognition = () => {
    if (!speechRecognisionActive) {
      recognition.start();
      console.log('Recognition started!');
    }
    setSpeechRecognisionActive(true);
  }

  const stopRecognition = () => {
    recognition.stop();
    console.log('Recognition stopped!')
    setSpeechRecognisionActive(false);
  }

  recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var action = event.results[last][0].transcript;
    var actionNoWhitespaces = action.trim();
    var rightWord = actions.includes(actionNoWhitespaces);
    if (rightWord === true) {
      console.log('%cRozpoznano słowo: ' + actionNoWhitespaces + ' (Confidence: ' + event.results[0][0].confidence + ').', "color: green");
      EventEmitter.dispatch('wordSaid', actionNoWhitespaces);
    } else {
      console.log('%cNiewłaściwa komenda.', "color: red");
    }
  }

  recognition.onnomatch = function (event) {
    console.log('No word match');

  }
  recognition.onspeechend = function () {
    console.log('Speech ended!');
    if (speechRecognisionActive) {
      stopRecognition();
      setTimeout(() => recognition.start(), 500);
      console.log('Speech recognision restarted!');
    }
  }

  var rows = [];
  let recs = require('./recipes.json');

  for (let index = 0; index < recs.length; index++) {
    rows.push(<Route path={recs[index].url} key={"route-" + index}>
      <DishMainPage
        imageSource={recs[index].imageSource}
        sampleImageSource={recs[index].sampleImageSource}
        dishName={recs[index].dishName}
        shortDesc={recs[index].shortDesc}
        desc={recs[index].desc}
        time={recs[index].time}
        mainPath={recs[index].url}
        ingrOn={recs[index].ingrOn}
        url={recs[index].urlToInstruction}
        naczynia={recs[index].naczynia}
        allSteps={recs[index].allSteps}
        dishSourceUrl={recs[index].dishSourceUrl}
        ingredients={recs[index].ingredients}
        startRecognition={startRecognition}
        stopRecognition={stopRecognition}
      />
    </Route>);
  }

  return (
    <Router>
      <div className="App">
        <div className="twoColumns">
          <div className="leftColumn">
            <Header />
            <MenuList />
            <Welcome />
            <FollowMeLeftMenu />
          </div>
          <div className="rightColumn">
            <Switch>
              <Route exact path="/">
                <Info />
                <Section sectionType="NoweWpisy" />
                <Section sectionType="PopularneWpisy" />
                <div > <FollowMe /></div>
                <Section sectionType="PrzepisyWeganskie" />
                <Section sectionType="SzybkieDania" />
                <Section sectionType="DlaPoczatkujacych" />
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
              <Route path="/podstawyWege">
                <VegeBasics />
              </Route>
              <Route path="/wszystkiePrzepisy">
                <ShowMoreList category="wszystkie przepisy" />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/nowe-wpisy">
                <ShowMoreList category="nowe wpisy" />
              </Route>
              <Route path="/popularne-wpisy">
                <ShowMoreList category="popularne wpisy" />
              </Route>
              <Route path="/przepisy-wege">
                <ShowMoreList category="przepisy wegańskie" />
              </Route>
              <Route path="/szybkie-dania">
                <ShowMoreList category="szybkie dania" />
              </Route>
              <Route path="/dla-poczatkujacych">
                <ShowMoreList category="dla początkujących" />
              </Route>
              {rows}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
