import React from 'react';
//Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FollowMe from '../FollowMe';
import FollowMeLeftMenu from '../FollowMeLeftMenu';
// import komponentów:
import Header from '../Header';
import Info from '../Info';
import MenuList from '../MenuList';

import Section from '../Section';
import Welcome from '../Welcome';
import DishMainPage from '../DishMainPage';
import ShowMoreList from '../ShowMoreList';
import About from '../About';
import VegeBasics from '../VegeBasics';
import StepZero from '../StepZero';
import Step from '../Step';
import LastStep from '../LastStep';
//import logo from '../logo.svg';
import './App.css';
// import * as recipes from './recipes.json';


export default function App() {

  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition // eslint-disable-line no-undef
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList // eslint-disable-line no-undef
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent // eslint-disable-line no-undef
  
  const actions = [ 'następny' , 'następny krok' , 'dalej', 'wróć', 'wstecz', 'poprzedni', 'poprzedni krok'];
  const grammar = '#JSGF V1.0; grammar actions; public <action> = ' + actions.join(' | ') + ' ;'

  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.continuous = true;
  recognition.lang = 'pl-PL';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  
  // const actions = [];
  const onClickFn = () => {}
  function XMLDocument() {}
  
  function handleClickNastepny(e) {
//     e.preventDefault();
//     console.log('START.');
//     recognition.start();
//     console.log('Ready to receive a command.');


}

//   var actionRecived;
//   actions.forEach(function(v, i, a){
//     console.log(v, i, a);
//   });


  recognition.onresult = function(event) {
//     console.log(event.results)
    var last = event.results.length - 1;
    var action = event.results[last][0].transcript;
    var action2 = action.trim();
    var n = actions.includes(action2);
    if(n==true){
      console.log ('%cRozpoznano słowo: ' + action2 + ' (Confidence: ' + event.results[0][0].confidence + ').', "color: green");
    } 
    else if (n==false) {
      console.log ('%cNiewłaściwa komenda.', "color: red");
    }
  }
  
  recognition.onnomatch = function(event) {
  console.log('No match.')

}
  recognition.onspeechend = function() {
    // recognition.stop();
  }

  function handleClickPoprzedni(e) {
    e.preventDefault();
    console.log('Kliknięto w Poprzedni (stop).');
    recognition.stop();
    console.log('Stopped')
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
                {/*****************************************************/}
                <div className = "buttonsSection">
               <div className="stepbByStep" align="right"> 
                   <a className="goToStepByStep" href="#" onClick={handleClickNastepny}> START (TEST) </a>
                </div>           
     
               <div className="stepbByStep" align="right"> 
                   <a className="goToStepByStep" href="#" onClick={handleClickPoprzedni}> STOP (TEST) </a>
                </div>
               
            </div>
                {/*****************************************************/}
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
              <ShowMoreList category="wszystkie przepisy"/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/nowe-wpisy">
                <ShowMoreList category="nowe wpisy"/>
              </Route>
              <Route path="/popularne-wpisy">
                <ShowMoreList category="popularne wpisy"/>
              </Route>
              <Route path="/przepisy-wege">
              <ShowMoreList category="przepisy wegańskie"/>
              </Route>
              <Route path="/szybkie-dania">
              <ShowMoreList category="szybkie dania"/>
              </Route>
              <Route path="/dla-poczatkujacych">
              <ShowMoreList category="dla początkujących"/>
              </Route>
{/**************  Danie 1:  ****************/}
              <Route exact path="/danie-1">
                <DishMainPage
                  imageSource="img/sample_pizza.jpg"
                  dishName="Włoska pizza z kamienia"
                  shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sem vitae augue tincidunt tempus. Sed gravida, metus vel vestibulum interdum, ligula nisi tristique ante, sed viverra purus justo in enim. Suspendisse a eleifend turpis. Proin a nunc leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ultrices fringilla tincidunt."
                  desc={<span>
                    <p>Ut mattis quam finibus augue auctor, sed feugiat ex rhoncus. Vivamus nec ullamcorper nibh. Proin ac ornare odio. Phasellus gravida nunc at nisl convallis, eget eleifend arcu euismod. Phasellus et nisl augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas finibus eros vel ullamcorper feugiat. Donec lobortis in tortor at semper. Donec id facilisis eros, at aliquam leo.</p>
                    <p>Aenean malesuada purus leo, nec consequat augue mollis ac. Nam accumsan viverra eleifend. Ut varius tellus a enim posuere auctor. Cras neque mauris, viverra quis dictum euismod, malesuada et diam. Curabitur sit amet pretium odio. Mauris ac mi finibus nunc efficitur lobortis in id arcu. Donec a tortor et leo consequat tristique id nec leo. Vivamus in maximus leo. Aliquam non mi et tortor sodales ultrices ut nec arcu. Mauris imperdiet mi dui, sit amet gravida ante eleifend efficitur. Aenean ornare sem augue, in gravida arcu pellentesque nec. In malesuada, mauris quis cursus consectetur, nisl ligula dignissim mauris, vel imperdiet velit ipsum hendrerit felis. Sed in metus sed elit hendrerit venenatis. Sed quis ex odio.</p>
                  </span>}
                  time="1h 30 min"
                  ingrOn= "na 1 pizzę"
                  ingredients = {["340g mąki", 
                                  "5g Suszonych drożdży",
                                  "1,5 łyżeczki cukru",
                                  "1,5 łyżecki soli", 
                                  "2 łyżki oliwy",
                                  "250 ml letniej wody"]}
                  url = "/danie-1-step-by-step"
                  naczynia="miska na drożdże, 
                            duża miska do wyrobienia ciasta, 
                            granitowy kamień do pieczenia, 
                            łopatka do ciasta, wałek, piekarnik."
                  allSteps={["Rozpuścić drożdże w letniej wodzie",
                             "Odstawić na 10 minut.",
                             "W misce wymieszać mąkę, cukier, sól i wlać drożdże. ", 
                             "Wyrabiać ciasto około 10min, oprószając mąką, aż stanie się jednolite i elastyczne.",
                             "Odstawić ciasto na 10 minut. ",
                             "Ponownie włożyć ciasto do miski i wyrobić z oliwą.",
                             "Podzielić na porcje po 150 g i uformować w kule.",
                             "Przykryć ciasto folią i odstawić na 45 minut, aby urosło (powinno zwiększyć objętość dwukrotnie).",
                             "Kiedy ciasto wyrośnie, nagrzać piekarnik do 230C.",
                             "Oprószyć ciasto mąką i wałkować, tak by ze środka usunąć pęcherzyki powietrza. ",
                             "Uformować ciasto w placki o średnicy około 30 cm.",
                             "Ciasto przygotowujemy na drewnianej łopatce posypanej mąką co znacznie ułatwi nam przełożenie go na rozgrzany kamień",
                             "Piec na kamieniu przez 5-7 minut."]}
                  dishSourceUrl = "https://artigiano.pl/blog/przepis-na-wloska-pizze/"
                />
              </Route>
              <Route exact path="/danie-1-step-by-step">
                <StepZero dishName="Włoska pizza z kamienia"
                ingredients = {["340g mąki", 
                                  "5g Suszonych drożdży",
                                  "1,5 łyżeczki cukru",
                                  "1,5 łyżecki soli", 
                                  "2 łyżki oliwy",
                                  "250 ml letniej wody"]} 
                naczynia={["miska na drożdże", 
                          "duża miska do wyrobienia ciasta", 
                          "granitowy kamień do pieczenia", 
                          "łopatka do ciasta", 
                          "wałek", 
                          "piekarnik"]}
                            />
              </Route>
              <Route exact path ="/danie-1-step-by-step-1">
                    <Step stepNumber = "1"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Rozpuścić drożdże w letniej wodzie"
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-2"
                          previousStepURL="/danie-1-step-by-step"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-2">
                    <Step stepNumber = "2"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Odstawić na 10 minut."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-3"
                          previousStepURL="/danie-1-step-by-step-1"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-3">
                    <Step stepNumber = "3"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "W misce wymieszać mąkę, cukier, sól i wlać drożdże. "
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-4"
                          previousStepURL="/danie-1-step-by-step-2"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-4">
                    <Step stepNumber = "4"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Wyrabiać ciasto około 10min, oprószając mąką, aż stanie się jednolite i elastyczne."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-5"
                          previousStepURL="/danie-1-step-by-step-3"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-5">
                    <Step stepNumber = "5"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Odstawić ciasto na 10 minut."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-6"
                          previousStepURL="/danie-1-step-by-step-4"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-6">
                    <Step stepNumber = "6"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Ponownie włożyć ciasto do miski i wyrobić z oliwą."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-7"
                          previousStepURL="/danie-1-step-by-step-5"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-7">
                    <Step stepNumber = "7"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Podzielić na porcje po 150 g i uformować w kule."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-8"
                          previousStepURL="/danie-1-step-by-step-6"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-8">
                    <Step stepNumber = "8"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Przykryć ciasto folią i odstawić na 45 minut, aby urosło (powinno zwiększyć objętość dwukrotnie)."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-9"
                          previousStepURL="/danie-1-step-by-step-7"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-9">
                    <Step stepNumber = "9"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Kiedy ciasto wyrośnie, nagrzać piekarnik do 230C."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-10"
                          previousStepURL="/danie-1-step-by-step-8"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-10">
                    <Step stepNumber = "10"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Oprószyć ciasto mąką i wałkować, tak by ze środka usunąć pęcherzyki powietrza. "
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-11"
                          previousStepURL="/danie-1-step-by-step-9"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-11">
                    <Step stepNumber = "11"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Uformować ciasto w placki o średnicy około 30 cm."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-12"
                          previousStepURL="/danie-1-step-by-step-10"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-12">
                    <Step stepNumber = "12"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Ciasto przygotowujemy na drewnianej łopatce posypanej mąką co znacznie ułatwi nam przełożenie go na rozgrzany kamień."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-step-by-step-13"
                          previousStepURL="/danie-1-step-by-step-11"/>
              </Route>
              <Route exact path ="/danie-1-step-by-step-13">
                    <Step stepNumber = "13"
                          dishName = "Włoska pizza z kamienia"
                          stepDesc = "Piec na kamieniu przez 5-7 minut.."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-1-last-step"
                          previousStepURL="/danie-1-step-by-step-12"/>
              </Route>
              <Route exact path ="/danie-1-last-step">
                    <LastStep dishName = "Włoska pizza z kamienia"
                              image = "img/sample_pizza.jpg"/>
              </Route>
{/**************Danie 2*********************/}
              <Route exact path="/danie-2">
                <DishMainPage
                  imageSource="img/sample_muffin.jpg"
                  dishName="Wegańskie muffiny"
                  shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sem vitae augue tincidunt tempus. Sed gravida, metus vel vestibulum interdum, ligula nisi tristique ante, sed viverra purus justo in enim. Suspendisse a eleifend turpis. Proin a nunc leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ultrices fringilla tincidunt."
                  desc={<span>
                    <p>Ut mattis quam finibus augue auctor, sed feugiat ex rhoncus. Vivamus nec ullamcorper nibh. Proin ac ornare odio. Phasellus gravida nunc at nisl convallis, eget eleifend arcu euismod. Phasellus et nisl augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas finibus eros vel ullamcorper feugiat. Donec lobortis in tortor at semper. Donec id facilisis eros, at aliquam leo.</p>
                    <p>Aenean malesuada purus leo, nec consequat augue mollis ac. Nam accumsan viverra eleifend. Ut varius tellus a enim posuere auctor. Cras neque mauris, viverra quis dictum euismod, malesuada et diam. Curabitur sit amet pretium odio. Mauris ac mi finibus nunc efficitur lobortis in id arcu. Donec a tortor et leo consequat tristique id nec leo. Vivamus in maximus leo. Aliquam non mi et tortor sodales ultrices ut nec arcu. Mauris imperdiet mi dui, sit amet gravida ante eleifend efficitur. Aenean ornare sem augue, in gravida arcu pellentesque nec. In malesuada, mauris quis cursus consectetur, nisl ligula dignissim mauris, vel imperdiet velit ipsum hendrerit felis. Sed in metus sed elit hendrerit venenatis. Sed quis ex odio.</p>
                  </span>}
                  time="45 min"
                  ingrOn= "na jedną blachę"
                  ingredients = {["2 szklanki mąki ", 
                                  "1 ½ szklanki mleka roślinnego",
                                  "½ szklanki cukru",
                                  "3 –4 łyżeczki proszku do pieczenia (można część zastąpić sodą oczyszczoną)", 
                                  "2 średnie banany, dojrzałe",
                                  "1 łyżka oleju (opcjonalnie)", 
                                  "miąższ z ½ laski wanilii", 
                                  "dodatki: orzechy, owoce, kawałki czekolady, Twoje ulubione przyprawy"]}
                  url = "/danie-2-step-by-step"
                  naczynia="duża miska do wymieszania składników,
                            mniejsza miska na banany, 
                            widelec, 
                            trzepaczka lub mikser, 
                            piekarnik, 
                            blaszka do pieczenia muffinów."
                  allSteps={["Suche składniki wymieszaj w większej misce.",
                             "W drugiej misce dokładnie ugnieć banany widelcem na gadką masę.",
                             "Do ugniecionych bananów dodaj mleko oraz miąższ z wanilii.", 
                             "Do suchych składników wlej mokre.",
                             "Dokładnie wymieszaj składniki trzepaczką do pieczenia.",
                             "Dodaj swoje ulubione przyprawy.",
                             "Nastaw piekarnik na 180 stopni.",
                             "Blaszkę do pieczenia muffinów wysmaruj olejem lub wyłóż papierowymi foremkami.",
                             "Do każdego miejsca na muffina wlej ciasto do około ¾ wysokości.", 
                             "Dodaj orzechy",
                             "Piecz 40 minut, do momentu aż muffiny zacznął się rumienić"]}
                  dishSourceUrl = "https://ervegan.com/2015/04/najprostsze-weganskie-muffiny/"
                />
              </Route>
              <Route exact path="/danie-2-step-by-step">
              <StepZero dishName="Wegańskie muffiny"
              ingredients = {["2 szklanki mąki ", 
                                  "1 ½ szklanki mleka roślinnego",
                                  "½ szklanki cukru",
                                  "3 –4 łyżeczki proszku do pieczenia (można część zastąpić sodą oczyszczoną)", 
                                  "2 średnie banany, dojrzałe",
                                  "1 łyżka oleju (opcjonalnie)", 
                                  "miąższ z ½ laski wanilii", 
                                  "dodatki: orzechy, owoce, kawałki czekolady, Twoje ulubione przyprawy"]}
                naczynia={["duża miska do wymieszania składników",
                            "mniejsza miska na banany", 
                            "widelec", 
                            "trzepaczka lub mikser", 
                            "piekarnik", 
                            "blaszka do pieczenia muffinów"]}
                            />
              </Route>
              <Route exact path ="/danie-2-step-by-step-1">
                    <Step stepNumber = "1"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Suche składniki wymieszaj w większej misce."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-2"
                          previousStepURL="/danie-2-step-by-step"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-2">
                    <Step stepNumber = "2"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "W drugiej misce dokładnie ugnieć banany widelcem na gadką masę."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-3"
                          previousStepURL="/danie-2-step-by-step-1"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-3">
                    <Step stepNumber = "3"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Do ugniecionych bananów dodaj mleko oraz miąższ z wanilii."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-4"
                          previousStepURL="/danie-2-step-by-step-2"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-4">
                    <Step stepNumber = "4"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Do suchych składników wlej mokre."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-5"
                          previousStepURL="/danie-2-step-by-step-3"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-5">
                    <Step stepNumber = "5"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Dokładnie wymieszaj składniki trzepaczką do pieczenia."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-6"
                          previousStepURL="/danie-2-step-by-step-4"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-6">
                    <Step stepNumber = "6"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Dodaj swoje ulubione przyprawy."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-7"
                          previousStepURL="/danie-2-step-by-step-5"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-7">
                    <Step stepNumber = "7"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Nastaw piekarnik na 180 stopni."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-8"
                          previousStepURL="/danie-2-step-by-step-6"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-8">
                    <Step stepNumber = "8"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Blaszkę do pieczenia muffinów wysmaruj olejem lub wyłóż papierowymi foremkami."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-9"
                          previousStepURL="/danie-2-step-by-step-7"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-9">
                    <Step stepNumber = "9"
                          dishName = "Wegańskie muffinya"
                          stepDesc = "Do każdego miejsca na muffina wlej ciasto do około ¾ wysokości."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-10"
                          previousStepURL="/danie-2-step-by-step-8"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-10">
                    <Step stepNumber = "10"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Dodaj orzechy"
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-step-by-step-11"
                          previousStepURL="/danie-2-step-by-step-9"/>
              </Route>
              <Route exact path ="/danie-2-step-by-step-11">
                    <Step stepNumber = "11"
                          dishName = "Wegańskie muffiny"
                          stepDesc = "Piecz 40 minut, do momentu aż muffiny zacznął się rumienić"
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-2-last-step"
                          previousStepURL="/danie-2-step-by-step-10"/>
              </Route>
              <Route exact path ="/danie-2-last-step">
                    <LastStep dishName = "Wegańskie muffiny"
                              image = "img/sample_muffin.jpg"/>
              </Route>
{/***********Danie 3************/}
              <Route exact path="/danie-3">
                <DishMainPage
                  imageSource="img/sample_snack.jpg"
                  dishName="Wege tacos"
                  shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sem vitae augue tincidunt tempus. Sed gravida, metus vel vestibulum interdum, ligula nisi tristique ante, sed viverra purus justo in enim. Suspendisse a eleifend turpis. Proin a nunc leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ultrices fringilla tincidunt."
                  desc={<span>
                    <p>Ut mattis quam finibus augue auctor, sed feugiat ex rhoncus. Vivamus nec ullamcorper nibh. Proin ac ornare odio. Phasellus gravida nunc at nisl convallis, eget eleifend arcu euismod. Phasellus et nisl augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas finibus eros vel ullamcorper feugiat. Donec lobortis in tortor at semper. Donec id facilisis eros, at aliquam leo.</p>
                    <p>Aenean malesuada purus leo, nec consequat augue mollis ac. Nam accumsan viverra eleifend. Ut varius tellus a enim posuere auctor. Cras neque mauris, viverra quis dictum euismod, malesuada et diam. Curabitur sit amet pretium odio. Mauris ac mi finibus nunc efficitur lobortis in id arcu. Donec a tortor et leo consequat tristique id nec leo. Vivamus in maximus leo. Aliquam non mi et tortor sodales ultrices ut nec arcu. Mauris imperdiet mi dui, sit amet gravida ante eleifend efficitur. Aenean ornare sem augue, in gravida arcu pellentesque nec. In malesuada, mauris quis cursus consectetur, nisl ligula dignissim mauris, vel imperdiet velit ipsum hendrerit felis. Sed in metus sed elit hendrerit venenatis. Sed quis ex odio.</p>
                  </span>}
                  time="45 min - 1h"
                  ingrOn= "na 4 porcje"
                  ingredients = {["250 gramów mąki masa harina", 
                                  "270 ml gorącej wody",
                                  "2 szypty soli",
                                  "szczypta kurkumy (opcjonalnie)", 
                                  "2 świeże kukurydze",
                                  "1 łyżka masła", 
                                  "odrobina papryki wędzonej", 
                                  "żółta cukinia",
                                  "czerwona paptyka",
                                  "czerwona cebula",
                                  "2 ząbki czosnku",
                                  "cytryna",
                                  "chilli w proszku",
                                  "tabasco",
                                  "2 pomidory malinowe",
                                  "odrobina miodu",
                                  "jedno duże, miękkie awokado",
                                  "sok z limonki",
                                  "1/2 czerwonej cebuli",
                                  "pomidor",
                                  "świeża kolendra",
                                  "sól i pieprz"]}
                  url = "/danie-3-step-by-step"
                  naczynia="miska, folia spożywcza, patelnia, szklana butelka, garnek (do zagotowania kukurydzy), nóż"
                  allSteps={["W misce łączymy ze sobą odmierzoną ilość mąki z wodą.",
                             "Wyrabiamy ciasto ręcznie. ",
                             "Po wyrobieniu przykrywamy miskę folią i odkładamy na bok na mniej więcej 45 minut.",
                             "Dzielimy ciasto na kulki wielkości piłeczek pingpongowych.",
                             "Wałkujemy ciasto przez folię spożywczą",
                             "Gotowe placki smażymy bez tłuszczu na bardzo rozgrzanej patelni.",
                             "Kiedy placki są jeszcze gorące, kładziemy je na szklanej butelce, i formujemy w kształt łódeczek aby były idealne do napełnienia."]}
                  dishSourceUrl = "https://beachpliz.pl/domowe-wege-tacos/"
                />
              </Route>
              <Route exact path="/danie-3-step-by-step">
              <StepZero dishName="Wege tacos"
              ingredients = {["250 gramów mąki masa harina", 
                                  "270 ml gorącej wody",
                                  "2 szypty soli",
                                  "szczypta kurkumy (opcjonalnie)", 
                                  "2 świeże kukurydze",
                                  "1 łyżka masła", 
                                  "odrobina papryki wędzonej", 
                                  "żółta cukinia",
                                  "czerwona paptyka",
                                  "czerwona cebula",
                                  "2 ząbki czosnku",
                                  "cytryna",
                                  "chilli w proszku",
                                  "tabasco",
                                  "2 pomidory malinowe",
                                  "odrobina miodu",
                                  "jedno duże, miękkie awokado",
                                  "sok z limonki",
                                  "1/2 czerwonej cebuli",
                                  "pomidor",
                                  "świeża kolendra",
                                  "sól i pieprz"]}
                naczynia={["miska", 
                            "folia spożywcza", 
                            "patelnia", 
                            "szklana butelka",
                            "garnek (do zagotowania kukurydzy)", 
                            "nóż"]}
                            />
              </Route>
              <Route exact path ="/danie-3-step-by-step-1">
                    <Step stepNumber = "1"
                          dishName = "Wege tacos"
                          stepDesc = "W misce łączymy ze sobą odmierzoną ilość mąki z wodą."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-3-step-by-step-2"
                          previousStepURL="/danie-3-step-by-step"/>
              </Route>
              <Route exact path ="/danie-3-step-by-step-2">
                    <Step stepNumber = "2"
                          dishName = "Wege tacos"
                          stepDesc = "Wyrabiamy ciasto ręcznie."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-3-step-by-step-3"
                          previousStepURL="/danie-3-step-by-step-1"/>
              </Route>
              <Route exact path ="/danie-3-step-by-step-3">
                    <Step stepNumber = "3"
                          dishName = "Wege tacos"
                          stepDesc = "Po wyrobieniu przykrywamy miskę folią i odkładamy na bok na mniej więcej 45 minut."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-3-step-by-step-4"
                          previousStepURL="/danie-3-step-by-step-2"/>
              </Route>
              <Route exact path ="/danie-3-step-by-step-4">
                    <Step stepNumber = "4"
                          dishName = "Wege tacos"
                          stepDesc = "Dzielimy ciasto na kulki wielkości piłeczek pingpongowych."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-3-step-by-step-5"
                          previousStepURL="/danie-3-step-by-step-3"/>
              </Route>
              <Route exact path ="/danie-3-step-by-step-5">
                    <Step stepNumber = "5"
                          dishName = "Wege tacos"
                          stepDesc = "Wałkujemy ciasto przez folię spożywczą."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-3-step-by-step-6"
                          previousStepURL="/danie-3-step-by-step-4"/>
              </Route>
              <Route exact path ="/danie-3-step-by-step-6">
                    <Step stepNumber = "6"
                          dishName = "Wege tacos"
                          stepDesc = "Gotowe placki smażymy bez tłuszczu na bardzo rozgrzanej patelni."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-3-step-by-step-7"
                          previousStepURL="/danie-3-step-by-step-5"/>
              </Route>
              <Route exact path ="/danie-3-step-by-step-7">
                    <Step stepNumber = "7"
                          dishName = "Wege tacos"
                          stepDesc = "Kiedy placki są jeszcze gorące, kładziemy je na szklanej butelce, i formujemy w kształt łódeczek aby były idealne do napełnienia."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-3-last-step"
                          previousStepURL="/danie-3-step-by-step-6"/>
              </Route>
              <Route exact path ="/danie-3-last-step">
                    <LastStep dishName = "Wege tacos"
                              image = "img/sample_snack.jpg"/>
              </Route>
{/************Danie 4******************/}
              <Route exact path="/danie-4">
                <DishMainPage
                  imageSource="img/sample_snack2.jpg"
                  dishName="Sałatka z grillowanych warzyw"
                  shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sem vitae augue tincidunt tempus. Sed gravida, metus vel vestibulum interdum, ligula nisi tristique ante, sed viverra purus justo in enim. Suspendisse a eleifend turpis. Proin a nunc leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ultrices fringilla tincidunt."
                  desc={<span>
                    <p>Ut mattis quam finibus augue auctor, sed feugiat ex rhoncus. Vivamus nec ullamcorper nibh. Proin ac ornare odio. Phasellus gravida nunc at nisl convallis, eget eleifend arcu euismod. Phasellus et nisl augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas finibus eros vel ullamcorper feugiat. Donec lobortis in tortor at semper. Donec id facilisis eros, at aliquam leo.</p>
                    <p>Aenean malesuada purus leo, nec consequat augue mollis ac. Nam accumsan viverra eleifend. Ut varius tellus a enim posuere auctor. Cras neque mauris, viverra quis dictum euismod, malesuada et diam. Curabitur sit amet pretium odio. Mauris ac mi finibus nunc efficitur lobortis in id arcu. Donec a tortor et leo consequat tristique id nec leo. Vivamus in maximus leo. Aliquam non mi et tortor sodales ultrices ut nec arcu. Mauris imperdiet mi dui, sit amet gravida ante eleifend efficitur. Aenean ornare sem augue, in gravida arcu pellentesque nec. In malesuada, mauris quis cursus consectetur, nisl ligula dignissim mauris, vel imperdiet velit ipsum hendrerit felis. Sed in metus sed elit hendrerit venenatis. Sed quis ex odio.</p>
                  </span>}
                  time="30 min"
                  ingrOn= "na porcję dla dwóch osób"
                  ingredients = {["cukinia ", 
                                  "bakłażan",
                                  "sos sałatkowy",
                                  "ząbek czosnku", 
                                  "cytryna",
                                  "czerwona papryka", 
                                  "oliwa z oliwek"]}
                  url = "/danie-4-step-by-step"
                  naczynia="nóż, miska, patelnia grillowa"
                  allSteps={["Dokładnie umyj warzywa",
                             "Cukinię pokrój w plastry o grubości 0,5 cm.",
                             "Bakłażana pokrój w plastry o grubości 0,5cm.",
                             "Paprykę oczyść z gniazd nasiennych. Miąższ pokrój w duże kawałki.",
                             "W misce połącz sos sałatkowy z oliwą.",
                             "Odstaw sos na 10 minut.",
                             "Wszystkie warzywa grilluj po kilka minut z każdej strony",
                             "Sałatkę można podawać na ciepło jak i na zimno."]}
                  dishSourceUrl = "https://www.przepisy.pl/przepis/salatka-z-grillowanych-warzyw-1"
                />
              </Route>
              <Route exact path="/danie-4-step-by-step">
              <StepZero dishName="Sałatka z grillowanych warzyw"
              ingredients = {["cukinia ", 
                                  "bakłażan",
                                  "sos sałatkowy",
                                  "ząbek czosnku", 
                                  "cytryna",
                                  "czerwona papryka", 
                                  "oliwa z oliwek"]}
                naczynia={["nóż", 
                            "miska", 
                            "patelnia grillowa"]}
                            />
              </Route>
              <Route exact path ="/danie-4-step-by-step-1">
                    <Step stepNumber = "1"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "Dokładnie umyj warzywa."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-step-by-step-2"
                          previousStepURL="/danie-4-step-by-step"/>
              </Route>
              <Route exact path ="/danie-4-step-by-step-2">
                    <Step stepNumber = "2"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "Cukinię pokrój w plastry o grubości 0,5 cm."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-step-by-step-3"
                          previousStepURL="/danie-4-step-by-step-1"/>
              </Route>
              <Route exact path ="/danie-4-step-by-step-3">
                    <Step stepNumber = "3"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "Bakłażana pokrój w plastry o grubości 0,5cm."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-step-by-step-4"
                          previousStepURL="/danie-4-step-by-step-2"/>
              </Route>
              <Route exact path ="/danie-4-step-by-step-4">
                    <Step stepNumber = "4"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "Paprykę oczyść z gniazd nasiennych. Miąższ pokrój w duże kawałki."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-step-by-step-5"
                          previousStepURL="/danie-4-step-by-step-3"/>
              </Route>
              <Route exact path ="/danie-4-step-by-step-5">
                    <Step stepNumber = "5"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "W misce połącz sos sałatkowy z oliwą."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-step-by-step-6"
                          previousStepURL="/danie-4-step-by-step-4"/>
              </Route>
              <Route exact path ="/danie-4-step-by-step-6">
                    <Step stepNumber = "6"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "Odstaw sos na 10 minut."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-step-by-step-7"
                          previousStepURL="/danie-4-step-by-step-5"/>
              </Route>
              <Route exact path ="/danie-4-step-by-step-7">
                    <Step stepNumber = "7"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "Wszystkie warzywa grilluj po kilka minut z każdej strony."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-step-by-step-8"
                          previousStepURL="/danie-4-step-by-step-6"/>
              </Route>
              <Route exact path ="/danie-4-step-by-step-8">
                    <Step stepNumber = "8"
                          dishName = "Sałatka z grillowanych warzyw"
                          stepDesc = "Sałatkę można podawać na ciepło jak i na zimno."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-4-last-step"
                          previousStepURL="/danie-4-step-by-step-6"/>
              </Route>
              <Route exact path ="/danie-4-last-step">
                    <LastStep dishName = "Sałatka z grillowanych warzyw"
                              image = "img/sample_snack2.jpg"/>
              </Route>

{/**********Danie 5**************************/}
              <Route exact path="/danie-5">
                <DishMainPage
                  imageSource="img/sample_tost.jpg"
                  dishName="Kanapka Grilled Cheese"
                  shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sem vitae augue tincidunt tempus. Sed gravida, metus vel vestibulum interdum, ligula nisi tristique ante, sed viverra purus justo in enim. Suspendisse a eleifend turpis. Proin a nunc leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ultrices fringilla tincidunt."
                  desc={<span>
                    <p>Ut mattis quam finibus augue auctor, sed feugiat ex rhoncus. Vivamus nec ullamcorper nibh. Proin ac ornare odio. Phasellus gravida nunc at nisl convallis, eget eleifend arcu euismod. Phasellus et nisl augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas finibus eros vel ullamcorper feugiat. Donec lobortis in tortor at semper. Donec id facilisis eros, at aliquam leo.</p>
                    <p>Aenean malesuada purus leo, nec consequat augue mollis ac. Nam accumsan viverra eleifend. Ut varius tellus a enim posuere auctor. Cras neque mauris, viverra quis dictum euismod, malesuada et diam. Curabitur sit amet pretium odio. Mauris ac mi finibus nunc efficitur lobortis in id arcu. Donec a tortor et leo consequat tristique id nec leo. Vivamus in maximus leo. Aliquam non mi et tortor sodales ultrices ut nec arcu. Mauris imperdiet mi dui, sit amet gravida ante eleifend efficitur. Aenean ornare sem augue, in gravida arcu pellentesque nec. In malesuada, mauris quis cursus consectetur, nisl ligula dignissim mauris, vel imperdiet velit ipsum hendrerit felis. Sed in metus sed elit hendrerit venenatis. Sed quis ex odio.</p>
                  </span>}
                  time="15 min"
                  ingrOn= ""
                  ingredients = {["chleb (najlepiej pszenny na zakwasie) - 4 grube kromki", 
                                  "masło - 1-2 łyżki",
                                  "cheddar - 4 plastry", 
                                  "mozzarella - 1/2 kuli",
                                  "jajko sadzone - 2 sztuki, opcjonalnie", 
                                  "sos chili, szczypioer, pieprz - do podania, opcjonalnie "]}
                  url = "/danie-5-step-by-step"
                  naczynia="patelnia (najlepiej żeliwna), nóż"
                  allSteps={["Kromki chleba posmaruj masłem.",
                             "Rozgrzej patelnię.",
                             "Ułóż na patelni dwie kromki chleba masłem do dołu. Na chlebie ułóż oba rodzaje sera i przykryj drugą kromką, tym razem masłem do góry",
                             "Smaż na małym ogniu, aż spód się zarumieni.",
                             "Przełóż na drugą stronę, ponownie usmaż.",
                             "Kanapki podawaj na gorąco, np. z jajkiem sadzonym na wierzchu."]}
                  dishSourceUrl = "http://kuchniaagaty.pl/przepisy/grillowane-kanapki-z-serem-grilled-cheese-sandwich"
                />
              </Route>
              <Route exact path="/danie-5-step-by-step">
              <StepZero dishName="Kanapka Grilled Cheese"
              ingredients = {["chleb (najlepiej pszenny na zakwasie) - 4 grube kromki", 
                                  "masło - 1-2 łyżki",
                                  "cheddar - 4 plastry", 
                                  "mozzarella - 1/2 kuli",
                                  "jajko sadzone - 2 sztuki, opcjonalnie", 
                                  "sos chili, szczypioer, pieprz - do podania, opcjonalnie "]}
                naczynia={["nóż", 
                            "patelnia (najlepiej żeliwna)"]}
                            />
              </Route>
              <Route exact path ="/danie-5-step-by-step-1">
                    <Step stepNumber = "1"
                          dishName = "Kanapka Grilled Cheese"
                          stepDesc = "Kromki chleba posmaruj masłem."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-5-step-by-step-2"
                          previousStepURL="/danie-5-step-by-step"/>
              </Route>
              <Route exact path ="/danie-5-step-by-step-2">
                    <Step stepNumber = "2"
                          dishName = "Kanapka Grilled Cheese"
                          stepDesc = "Rozgrzej patelnię."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-5-step-by-step-3"
                          previousStepURL="/danie-5-step-by-step-1"/>
              </Route>
              <Route exact path ="/danie-5-step-by-step-3">
                    <Step stepNumber = "3"
                          dishName = "Kanapka Grilled Cheese"
                          stepDesc = "Ułóż na patelni dwie kromki chleba masłem do dołu. Na chlebie ułóż oba rodzaje sera i przykryj drugą kromką, tym razem masłem do góry."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-5-step-by-step-4"
                          previousStepURL="/danie-5-step-by-step-2"/>
              </Route>
              <Route exact path ="/danie-5-step-by-step-4">
                    <Step stepNumber = "4"
                          dishName = "Kanapka Grilled Cheese"
                          stepDesc = "Smaż na małym ogniu, aż spód się zarumieni."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-5-step-by-step-5"
                          previousStepURL="/danie-5-step-by-step-3"/>
              </Route>
              <Route exact path ="/danie-5-step-by-step-5">
                    <Step stepNumber = "5"
                          dishName = "Kanapka Grilled Cheese"
                          stepDesc = "Przełóż na drugą stronę, ponownie usmaż."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-5-step-by-step-6"
                          previousStepURL="/danie-5-step-by-step-4"/>
              </Route>
              <Route exact path ="/danie-5-step-by-step-6">
                    <Step stepNumber = "6"
                          dishName = "Kanapka Grilled Cheese"
                          stepDesc = "Kanapki podawaj na gorąco, np. z jajkiem sadzonym na wierzchu."
                          image = "img/step-default.jpg" 
                          nextStepURL="/danie-5-last-step"
                          previousStepURL="/danie-5-step-by-step-5"/>
              </Route>
              <Route exact path ="/danie-5-last-step">
                    <LastStep dishName = "Kanapka Grilled Cheese"
                              image = "img/sample_tost.jpg"/>
              </Route>

{/*************Danie 6**********************/}
              <Route exact path="/danie-6">
                <DishMainPage
                  imageSource="img/sample_waffles.jpg"
                  dishName="Gofry owocowe"
                  shortDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sem vitae augue tincidunt tempus. Sed gravida, metus vel vestibulum interdum, ligula nisi tristique ante, sed viverra purus justo in enim. Suspendisse a eleifend turpis. Proin a nunc leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ultrices fringilla tincidunt."
                  desc={<span>
                    <p>Ut mattis quam finibus augue auctor, sed feugiat ex rhoncus. Vivamus nec ullamcorper nibh. Proin ac ornare odio. Phasellus gravida nunc at nisl convallis, eget eleifend arcu euismod. Phasellus et nisl augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas finibus eros vel ullamcorper feugiat. Donec lobortis in tortor at semper. Donec id facilisis eros, at aliquam leo.</p>
                    <p>Aenean malesuada purus leo, nec consequat augue mollis ac. Nam accumsan viverra eleifend. Ut varius tellus a enim posuere auctor. Cras neque mauris, viverra quis dictum euismod, malesuada et diam. Curabitur sit amet pretium odio. Mauris ac mi finibus nunc efficitur lobortis in id arcu. Donec a tortor et leo consequat tristique id nec leo. Vivamus in maximus leo. Aliquam non mi et tortor sodales ultrices ut nec arcu. Mauris imperdiet mi dui, sit amet gravida ante eleifend efficitur. Aenean ornare sem augue, in gravida arcu pellentesque nec. In malesuada, mauris quis cursus consectetur, nisl ligula dignissim mauris, vel imperdiet velit ipsum hendrerit felis. Sed in metus sed elit hendrerit venenatis. Sed quis ex odio.</p>
                  </span>}
                  time="30 min"
                  ingrOn= "na jedną blachę"
                  ingredients = {["3 szklanki mąki", 
                                  "2,5 szklanki mleka",
                                  "pół szklanki oleju",
                                  "3 jajka", 
                                  "2 płaskie łyżeczki proszku do pieczenia",
                                  "2 łyżki cukru", 
                                  "bita śmietana", 
                                  "owoce: kiwi,gruszka, banan,truskawki"]}
                  url = "/danie-6/step-by-step"
                  naczynia="gofrownica, 2 miski, kraktka do studzenia, nóż."
                  allSteps={["Żółtka oddziel od białek.",
                             "Utrzyj żółrka z cukrem.",
                             "Dodawaj naprzemiennie mąkę przesianą z proszkiem do pieczenia, mleko i olej.",
                             "Ubij białka ze szczyptą soli na sztywną pianę.",
                             "Delikatnie połącz pianę z masą, tak aby miała konsystencje gęstej śmietany.",
                             "Ciasto nakłądaj na gofrownicę i piecz po 3-4 minuty.",
                             "Studź na kratce",
                             "Umyj truskawiki i gruszkę, banana i kiwi obierz ze skórki.",
                             "Pokrój owoce w kostkę.",
                             "Udekoruj gofry bitą śmietaną i owocami."]}
                  dishSourceUrl = "https://www.przyslijprzepis.pl/przepis/gofry-z-bita-smietana-i-owocami-5"
                />
              </Route>
              <Route exact path="/danie-6/step-by-step">
              <h1>Danie 6, krok 0</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

//export default App;
