import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPetsSaga() {
    try {
        let pets = yield axios.get('/pets');

        yield put({
            type: 'SET_PETS',
            payload: pets.data
        })

    } catch (error) {
        console.log('error in fetchPetsSaga', error);

    }
}

function* addPet(action) {
    try {
        yield axios.post('/pets', action.payload);
        yield put({
            type: 'FETCH_PETS'
        })
    } catch (error) {
        console.log('error in addPets', error);
    }
}

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPetsSaga);
    yield takeLatest('ADD_PET', addPet);
}

export default petSaga;
