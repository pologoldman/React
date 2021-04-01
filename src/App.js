import "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Footer from './components/menu';
import NoteVocal from'./components/Voice';
import Planning from './components/Planning';
import Notification from './components/Notification';
import Recherche from './components/Recherche';
import Utilisateur from './components/Utilisateur';
import Header from './components/Header';
import Categorie from "./components/Categorie";
import Fond from "./components/Fond";
import Titre from "./components/Titre";
import Input_title from "./components/Input_title";
import Niveau from "./components/Niveau";
import Details from "./components/Details";

function App() {
    
    
    return (
        <Router>
            <Switch>
                    <Route exact path='/' >
                        <Utilisateur/>
                        <Recherche/>
                        <Planning/>
                        <Notification/>
                        <NoteVocal/>
                        <NoteVocal/>
                        <Footer/>
                    </Route>
                    <Route exact path="/note" >
                        <Header/>
                        <Categorie/>
                        <Footer/>
                    </Route>
            </Switch>
             
            <Switch>
                <Route exact path="/nouvelle-note" >
                    <Fond/>
                    <div className='box'>
                        <Titre/>
                        <Input_title/>
                        <Details/>
                        <Niveau/>
                    </div>
                    
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
