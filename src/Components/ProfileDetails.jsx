import React from 'react';
import Moment from 'react-moment';
const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};
const ProfileDetails = (props) => {
    return (
      <div>
        <div>
          {props.infoclean.avatar_url ?
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 style={imgStye}/> : null }
        </div>
		
        <div>
          {props.infoclean.name ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Name:</div> <div class="col-md-1 text-center">{props.infoclean.name}</div></div>: null }
        </div>
		
        <div>
          {props.infoclean.created_at ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Joined:</div> <div class="col-md-1 text-center">{<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.blog ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Blog:</div> <div class="col-md-1 text-center"><a href={
             props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></div></div> : null }
        </div>
		
        <div>
          {props.infoclean.location ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Location:</div> <div class="col-md-1 text-center">{props.infoclean.location}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.company ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Company:</div> <div class="col-md-1 text-center">{props.infoclean.company}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.public_repos ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Public Repos:</div> <div class="col-md-1 text-center">{props.infoclean.public_repos}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.followers ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Followers:</div> <div class="col-md-1 text-center">{props.infoclean.followers}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.following ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Following:</div> <div class="col-md-1 text-center">{props.infoclean.following}</div></div> : null }
        </div>
		
		<div>
          {props.infoclean.bio ?<div class="row justify-content-left text-dark"> <div class="col-md-1 text-center">Bio:</div> <div class="col-md-1 text-center">{props.infoclean.bio}</div></div>: null }
        </div>
		
		
        <div>
          {props.infoclean.html_url ? <div><p><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
        </div>
		
        <div>
          {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" />
        }<br/><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null }
        </div>
		
      </div>
    )
};
export default ProfileDetails;