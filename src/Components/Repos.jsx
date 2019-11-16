import React from 'react';


const Repos = (props) => {
	const elements =[];
	
	if(props.repos){
		
		//const repoNumber = Number(props.infoclean.public_repos); 
		//console.log(repoNumber);
		for(const i = 0; i < props.repos.length; i++){
			elements.push(props.repos[i].name);
		}
		
		
    return (
	
	
	
          <div>
		  
		 <div class="row">
		<div class="col-4">
		<div class="list-group" id="list-tab" role="tablist">
      {elements.map((value,index) => {
        return <a class="list-group-item list-group-item-action" id={index} data-toggle="list" href={'#'+index} role="tab" aria-controls={index}>{value}</a>
      })}
	  
   </div>
   </div>
		 <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
	{elements.map((value,index) => {
        return <div class="tab-pane fade" id={index} role="tabpanel" aria-labelledby={index}>{value}</div>
      })}
	</div>
  </div>
        </div>
		</div>
    
	
	)
	}else{return null;}
	};
export default Repos;