export default function (state = [], action) {
	switch(action.type){
		case 'GETUSER' :
			return action.data
		break
		default :
			return state
		break
	}
}