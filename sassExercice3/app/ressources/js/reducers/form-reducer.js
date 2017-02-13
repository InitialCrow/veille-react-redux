export default function (state = {identity : {first :null, last:null, mail : null}}, action) {
	
	switch (action.type){
		case  "UPDATEFIRST" :
			
			return action.identity
		break

		case  "UPDATELAST" :
			return action.identity
		break

		case  "UPDATEMAIL" :

			return action.identity
		break
			
		default:

			return state
		break
		
	
	}
}