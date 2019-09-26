const deleteOwnerError = (state = '', action) => {
    switch (action.type) {
        case 'CLEAR_ERROR':
            return '';
        case 'DELETE_FAILED':
            return 'Oops! The owner has a pet so this one can not be deleted. Try again!';
       
        default:
            return state;
    }
};

export default deleteOwnerError;