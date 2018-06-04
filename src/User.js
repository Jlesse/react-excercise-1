import React from 'react';

function User(props){
  	const user = props.users.find((u)=> u.id === props.id)
	return(
    	<div key={user.id} className='user'>
      		<div className='user-user-name'>{user.userName}</div>
      		<div className='user-name'>{user.name}</div>
      	</div>
    )
}

export default User