import React from 'react';
import User from './User.js';
import Movie from './Movie.js';

function Profile(props){
	return(
    	<li className="profile">
      		<User id={props.userID} users={props.users}/>
      		<Movie id={props.favoriteMovieID} movies={props.movies}/>
      	</li>
    )
}

export default Profile;