
function switchText (state = {text:'Hello!', state : 0}, action ){

	switch (action.type){
		case 'HELLO':
			
			return action.text
			break;
		case 'BYE':
			return action.text

			break;
		default :
			return state
			break;
	}
}
export default switchText