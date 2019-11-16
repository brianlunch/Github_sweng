import React from 'react';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const Repos = (props) => {
const elements =[];
if(props.repos){
//const repoNumber = Number(props.infoclean.public_repos); 
//console.log(repoNumber);
for(const i = 0; i < 1; i++){
elements.push(props.repos[i].name);
}

return (
<div>
      <div class="col-md-3 text-left">
        <div class="list-group" id="myList" role="tablist">
            {elements.map((value,index) => {
            return (<a class="list-group-item list-group-item-action" id="list-module1Y2-list" data-toggle="list" href="#list-ModuleName1Y2" role="tab" aria-controls="module1Y2">ModuleName1</a>)
            })}
         </div>
      </div>
      <div class="col-9">
         <div class="tab-content">
            {elements.map((value,index) => {
            return 
            (<div class="tab-pane fade show active " id="list-ModuleName1Y2" role="tabpanel" aria-labelledby="list-home-list">Ytttttttttttttttttttttttttttttttttttt	</div>)
            })}
         </div>
      </div>
   </div>
)
}else{return null;}
};
export default Repos;