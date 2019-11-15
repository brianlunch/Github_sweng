import React from 'react';
import Moment from 'react-moment';

const Repos = (props) => {
	
	if(props.repos){
    return (
	
	<div>
	
          <div>
          {props.repos.name ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Name:</div> <div class="col-md-2 text-left border-right border-right">{props.repos.name}</div></div>: null }
        </div>
    </div>
	
	)
	}
	};
export default Repos;