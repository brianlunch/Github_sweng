import React from 'react';
import axios from 'axios';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
const Repos = (props) => {
const elements =[];
if(props.repos){
//const repoNumber = Number(props.infoclean.public_repos); 
//console.log(repoNumber);
//stores repo names in array
var commits= [];
for(const i = 0; i < props.repos.length; i++){
elements.push(props.repos[i].name);
axios.get('https://api.github.com/repos/brianlunch/'+props.repos[i].name+'/commits').then(response =>{
commits.push(response.data.length);console.log(response.data.length);
}).catch((err) => { console.log(err); });
}
//stores commit json in commitFile
return (
<div class="row">
   <div class="col-3">
      <h5>Select a repo to analyse</h5>
      <div class="list-group" id="list-tab" role="tablist">
         <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#allrepos" role="tab" aria-controls="home">All repos</a>
         {elements.map((value,index) => {
         return(<a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href={"#"+value} role="tab" aria-controls="home">{value}</a>)
         })}
      </div>
   </div>
   <div class="col-9">
      <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show" id="allrepos" role="tabpanel" aria-labelledby="list-homes-list">All Repos</div>
         {elements.map((value,index) => {
         return(
         <div class="tab-pane fade show" id={value} role="tabpanel" aria-labelledby="list-homes-list">

          </div>  
         )
         })}
      </div>
   </div>
   </div>
)
}else{return null;}
};
export default Repos;