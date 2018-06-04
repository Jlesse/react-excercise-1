import React, { Component } from 'react';
import Profile from './Profile.js'

class ProfileList extends Component {
      render(){ return(
          <ul>
              {
                  this.props.profiles.map((profile) => {
                	console.log(profile)
                      return (<Profile key={profile.userID}
        							   userID={profile.userID} 
        							   favoriteMovieID={profile.favoriteMovieID} 
        							   users={this.props.users}
        							   movies={this.props.movies}/>)
                  })
              }
          </ul>
      )
	}
}

export default ProfileList;