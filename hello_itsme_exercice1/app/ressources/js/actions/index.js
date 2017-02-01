export const switchToHello = () =>{
	return{
		type : 'HELLO',
		text :{text : 'Hello!',state : 0},
	}
}

export const switchToIts = () =>{
	return{
		type : 'BYE',
		text : {text : 'Its ME!',state : 1,},
	}
}