import React from 'react';
import Moment from 'react-moment';
const imgStyle = {
  borderRadius: "5%",
  width: "100px",
  height: "100px"
};

const imgStyle1 = {
  borderRadius: "5%",
  width: "50px",
  height: "50px"
};

const ProfileDetails = (props) => {
    return (
      <div>
        <div>
		
          {props.infoclean.avatar_url ?<div class="row justify-content-right text-dark"> <div class="col-md-1 text-left"></div><div class="col-md-1 text-left">
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 style={imgStyle}/><br></br><br></br></div> <div class="col-md-1 text-left border-right border-right"></div></div> : null } 
        </div>
		
        <div>
          {props.infoclean.name ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Name:</div> <div class="col-md-2 text-left border-right border-right">{props.infoclean.name}</div></div>: null }
        </div>
		
        <div>
          {props.infoclean.created_at ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Joined:</div> <div class="col-md-2 text-left border-right">{<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.blog ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Blog:</div> <div class="col-md-2 text-left border-right"><a href={
             props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></div></div> : null }
        </div>
		
        <div>
          {props.infoclean.location ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Location:</div> <div class="col-md-2 text-left border-right">{props.infoclean.location}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.company ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Company:</div> <div class="col-md-2 text-left border-right">{props.infoclean.company}</div></div> : null }
        </div>
		
		
        <div>
          {props.infoclean.followers ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Followers:</div> <div class="col-md-2 text-left border-right">{props.infoclean.followers}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.following ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Following:</div> <div class="col-md-2 text-left border-right">{props.infoclean.following}</div></div> : null }
        </div>
		
		<div>
          {props.infoclean.bio ?<div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Bio:</div> <div class="col-md-2 text-left border-right">{props.infoclean.bio}</div></div>: null }
        </div>
		
		
        <div>
          {props.infoclean.html_url ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-left"></div><div class="col-md-1 text-center"><br></br><a href={props.infoclean.html_url} target="_blank"><img src="githubLogo.png"
                 alt="Githublogo"
                 style={imgStyle1}/></a></div></div> : null }
        </div>
		
		<div>
		
		</div>
		
        
		
      </div>
    )
};
export default ProfileDetails;