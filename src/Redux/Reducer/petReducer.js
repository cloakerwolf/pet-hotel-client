const petList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            return action.payload;
        case `SORT_PETNAME`:
            return state.sort((a, b)=> {
                if(a.petName < b.petName) {
                    if(action.payload){
                        return -1
                    } else {
                        return 1
                    }
                }
                if(a.petName > b.petName) {
                    if(action.payload){
                        return 1
                    } else {
                        return -1
                    }
                }
                return 0;
            });
        case `SORT_OWNERNAME`:
            return state.sort((a, b) => {
                if (a.ownerName < b.ownerName) {
                    if (action.payload) {
                        return -1
                    } else {
                        return 1
                    }
                }
                if (a.ownerName > b.ownerName) {
                    if (action.payload) {
                        return 1
                    } else {
                        return -1
                    }
                }
                return 0;
            });
        case `SORT_BREED`:
            return state.sort((a, b) => {
                if (a.breed < b.breed) {
                    if (action.payload) {
                        return -1
                    } else {
                        return 1
                    }
                }
                if (a.breed > b.breed) {
                    if (action.payload) {
                        return 1
                    } else {
                        return -1
                    }
                }
                return 0;
            });
        case `SORT_COLOR`:
            return state.sort((a, b) => {
                if (a.color < b.color) {
                    if (action.payload) {
                        return -1
                    } else {
                        return 1
                    }
                }
                if (a.color > b.color) {
                    if (action.payload) {
                        return 1
                    } else {
                        return -1
                    }
                }
                return 0;
            });
        default:
            return state;
    }
};



export default petList;