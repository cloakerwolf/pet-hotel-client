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
        console.log('error in fetchOwnersSaga', error);

    }
}

function* ownerSaga() {
    yield takeLatest('FETCH_OWNERS', fetchOwnerSaga);
    yield takeLatest('ADD_OWNER', addOwner);
}

export default ownerSaga;
