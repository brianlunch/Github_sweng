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
          {props.infoclean.name ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Name:</div> <div class="col-md-2 text-left">{props.infoclean.name}</div></div>: null }
        </div>
		
        <div>
          {props.infoclean.created_at ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Joined:</div> <div class="col-md-2 text-left">{<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.blog ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Blog:</div> <div class="col-md-2 text-left"><a href={
             props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></div></div> : null }
        </div>
		
        <div>
          {props.infoclean.location ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Location:</div> <div class="col-md-2 text-left">{props.infoclean.location}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.company ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Company:</div> <div class="col-md-2 text-left">{props.infoclean.company}</div></div> : null }
        </div>
		
		
        <div>
          {props.infoclean.followers ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Followers:</div> <div class="col-md-2 text-left">{props.infoclean.followers}</div></div> : null }
        </div>
		
        <div>
          {props.infoclean.following ? <div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Following:</div> <div class="col-md-2 text-left">{props.infoclean.following}</div></div> : null }
        </div>
		
		<div>
          {props.infoclean.bio ?<div class="row justify-content-left text-dark"> <div class="col-md-1 text-right">Bio:</div> <div class="col-md-2 text-left">{props.infoclean.bio}</div></div>: null }
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