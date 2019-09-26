import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchOwnerSaga() {
    try {
       

        yield put({
            type: 'SET_OWNERS',
            payload: owners.data
        })

    } catch (error) {
        console.log('error in fetchOwnersSaga', error);

    }
} 

function* ownerSaga() {
    yield takeLatest('FETCH_OWNERS', fetchOwnerSaga);
}

export default ownerSaga;