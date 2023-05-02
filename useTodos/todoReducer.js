

export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            //throw new error('Action.type = ABC no está implementada');
            return [ ...initialState, action.payload] //con action.payload vamos a tener el nuevo TODO

        case '[TODO] Remove Todo':  
            return initialState.filter( todo => todo.id !== action.payload )  

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }    
                }
                
                return todo;
            })
    
        default:
            return initialState;
    }

}