import React from 'react';
import './Style.css'
import Navbar from './Navbar';
import Form from './Form';
import Projectlist from "./Projectlist";
import Timetracking from "./Timetracking";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     
    };
   
  }


  render(){
      return(
        <Router>
      <div className="container-fluid">
         <Navbar/>
        
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/Home" component={Home}/>
         <Route path="/Form" component={Form}/>
         <Route path="/Projectlist" component={Projectlist}/>
         <Route path="/Timetracking" component={Timetracking}/>
         </Switch>
      </div>
      </Router>

    )
  }
};

const Home=() =>(
  <div className="container-fluid bgcol ">
            
  <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
      <p className="text-center con  ">GET START TO CREATE YOUR PROJECT.<br/><span className="total">TOTAL REVENUE </span><br/>CLICK BELOW</p>
      
      <Link to="/Form"> <i className="fa fa-angle-double-down "></i></Link>
      
      </div>
      <div className="col-2"></div>
   </div>
   


  </div>
)

export default App;
