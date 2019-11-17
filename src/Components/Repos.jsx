import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
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
   <div class="col-md-9 text-left">
      <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show" id="allrepos" role="tabpanel" aria-labelledby="list-homes-list">All Repos</div>
         {elements.map((value,index) => {
         return(
         <div class="tab-pane fade show" id={value} role="tabpanel" aria-labelledby="list-homes-list">
            <i></i>
            <div class="row justify-content-left text-dark">
               <h5>{value}<br></br><br></br></h5>
            </div>
            <div class="row justify-content-left text-dark">
               <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-4 text-left ">Size:</div>
                     <div class="col-md-6 text-left ">{String((Number(props.repos[index].size) * .001).toFixed(3))+" Mb"}</div>
                  </div>
               </div>
               <div class="col-md-3 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-6 text-left">Forks: </div>
                     {props.repos[index].forks ? 
                     <div class="col-md-6 text-left ">{props.repos[index].forks}</div>
                     : 
                     <div class="col-md-6 text-left ">0</div>
                     }
                  </div>
               </div>
               
                  <div class="col-md-5 text-left">
                  <div class="row justify-content-left text-dark">
                  <div class="col-md-4 text-left">Created:</div>
                  {props.repos[index].created_at ? 
         <div class="col-md-6 text-left ">{<Moment from={new Date()}>{props.repos[index].created_at}</Moment>}</div>
      : null }
                  </div>
               </div>
            </div>
            <div class="row justify-content-left text-dark">
               <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                  <div class="col-md-4 text-left">Langauge:</div>
                     {props.repos[index].language ? 
                     <div class="col-md-6 text-left ">{props.repos[index].language}</div>
                     : 
                     <div class="col-md-6 text-left ">NA</div>
                     }
                  </div>
               </div>
               <div class="col-md-3 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-6 text-left">Watchers: </div>
                     {props.repos[index].watchers ? 
                     <div class="col-md-6 text-left ">{props.repos[index].watchers}</div>
                     : 
                     <div class="col-md-6 text-left ">0</div>
                     }
                  </div>
               </div>
               
                  <div class="col-md-5 text-left">
                  <div class="row justify-content-left text-dark">
                  <div class="col-md-4 text-left">Updated:</div>
                  {props.repos[index].updated_at ? 
         <div class="col-md-6 text-left ">{<Moment from={new Date()}>{props.repos[index].updated_at}</Moment>}</div>
      : null }
                  </div>
                  </div>
               
            </div>
            <b></b>
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