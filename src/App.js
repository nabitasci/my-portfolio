import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
  <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={AboutMe} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
