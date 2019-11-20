import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import Repos from './components/Repos.jsx';
import Graph from './components/Graph.jsx';  
import ProfileDetails from './components/ProfileDetails.jsx';
//4bba21e7afaa3b6027e94de884f5d22973227866
//process.env.REACT_APP_GITHUB_TOKEN
//`token ${process.env.REACT_APP_GITHUB_TOKEN}`
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      infoclean : '',
	  repos : '',
      formData: {
        username: '',
      },
}
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
	
  }
  
handleUserFormSubmit(event) {
  
    event.preventDefault();
    const token = "";
	this.setState({infoclean : ' '});this.setState({repos : ' '});
	axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos?access_token='+token,{}).then(response => this.setState({
        repos : response.data,
    })).catch((err) => { console.log(err); });
	
	
       axios.get('https://api.github.com/users/'+this.state.formData.username+'?access_token='+token).then(response => this.setState({
      gitun: response.data.login,
      infoclean: ' ',
      infoclean: response.data,
    })).catch((err) => { console.log(err); });
	
	
	
}

handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
render() {
    return (
	
	
      <div className="App">
	  <main role="main">
        
		<br></br><br></br><br></br>
		
        <div class="row justify-content-left text-dark"> <div class="col-md-12 text-center">
		<div class ="bounce-in-top">
  
		<Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        /></div>
		</div></div><br></br><br></br>
      
		<div class="row justify-content-left text-dark"> 
		
		<div class="col-md-3 text-left border-right">
    
        <ProfileDetails infoclean={this.state.infoclean}/>
         
		</div>
		<div class="col-md-9 text-left">
		<Repos repos={this.state.repos}/>
		</div>
		</div>
		
		
		
		
		
	</main>
	</div>
    );
  }
}
export default App;