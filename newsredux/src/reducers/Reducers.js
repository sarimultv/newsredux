const istate={
    articles: []
  }

export function reducer(state=istate,action){
    switch(action.type){
        case 'ADD_NEWS':
            {
                return {
                    articles:[...action.payload]
                }
            }
            default: 
            return state
    }
}