import React from 'react';
import Countryname from './components/Countryname'
import './css/Countryname.css';
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'
import './css/App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './components/Contact';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     time: new Date().toLocaleTimeString(),
     date: new Date().toLocaleDateString()
    }
  }
  watch=()=>{
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }
  componentDidMount(){
      setInterval(this.watch,1000)
  }
  
render(){
  return(
    <div className="body"><h3 className="time">
       {this.state.date}<span>, </span>{this.state.time}</h3>
     
        <h1 className="header">NEWSPORTAL</h1>
        <div className="App">
          <Router>
            <Nav/>
            <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          </Switch>
          </Router> 
     </div>
     <div>
     <h4 className="nation">**Select the Nation for the Daily Breaking News</h4>
       <Router>
       <Route path="/"  component={Countryname} />
       </Router>
     </div>
    </div>
  )
}
}

export default App;



// function App() {
//   return (
    
//   );
// }

// export default App;