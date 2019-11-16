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
	
          <div>
		  
		 <ul class ="list-group">
      {elements.map((value, index) => {
        return <li class="list-group-item" key={index}>{value}</li>
      })}
    </ul>
		 
        </div>
		
    </div>
	
	)
	}else{return null;}
	};
export default Repos;