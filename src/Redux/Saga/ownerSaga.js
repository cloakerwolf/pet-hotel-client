import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchOwnerSaga() {
    try {
       let ownersResponse = yield axios.get('/owners')

        yield put({
            type: 'SET_OWNERS',
            payload: ownersResponse.data
        })

    } catch (error) {
        console.log('error in fetchOwnerSaga', error);

    }
}

function* addOwner(action) {
    try {
        yield axios.post('/owners', action.payload);
        yield put({
            type: 'FETCH_OWNERS'
        })
    } catch (error) {
        console.log('error in addOwner', error);
    }
}

function* DeleteOwner(action) {
    try {
        let deleteOwner = yield axios.delete(`/owners/${action.payload}`);
        console.log('deleteOwner', deleteOwner.data);
        yield put({
            type: 'FETCH_OWNERS',
            payload: deleteOwner.data
        })
    } catch (error) {
        console.log('error in the DeleteOwner Saga', error);

    }
}

function* ownerSaga() {
    yield takeLatest('FETCH_OWNERS', fetchOwnerSaga);
    yield takeLatest('ADD_OWNER', addOwner);
    yield takeLatest('DELETE_OWNER', DeleteOwner);
}

export default ownerSaga;
