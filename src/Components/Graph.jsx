import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
const Graph = (props) => {
const elements =[];
if(props.repos){
    for(const i = 0; i < props.repos.length; i++){
        elements.push(props.repos[i].name);
        }

return (
<p>hi</p>
)
}else{return null;}
};
export default Graph;