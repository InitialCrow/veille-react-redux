export const updateFirst = (field, state) =>{
	return {
		type : "UPDATEFIRST",
		identity : {first : field, last : state.last, mail : state.mail}
	}
}

export const updateLast = (field, state) =>{
	return {
		type : "UPDATELAST",
		identity : {first : state.first, last : field, mail : state.mail}

	}
}

export const updateMail = (field, state) =>{
	return {
		type : "UPDATEMAIL",
		identity : {first : state.first, last : state.last, mail : field}

	}
}
export const getUserList = () => {
  return dispatch => fetch('/api/get-user') // Redux Thunk handles these
    .then(res => res.json())
    .then(

      data =>  dispatch({ type: 'GETUSER', data : data }),
      err => dispatch({ type: 'GETUSERFAIL', err })
    );
}

