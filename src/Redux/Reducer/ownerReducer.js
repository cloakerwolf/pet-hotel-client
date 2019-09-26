const ownerList = (state = [], action) => {
    switch (action.type) {
        case 'SET_OWNERS':
            return action.payload;
        default:
            return state;
    }
};



export default ownerList;