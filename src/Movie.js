import React from 'react';

function Movie(props){
  	const movie = props.movies.find((m)=> m.id === props.id)
	return(
  		<div key={movie.id} className='movie'>
    		<div className='movie-name'>{movie.name}</div>
  		</div>
  )
}

export default Movie;