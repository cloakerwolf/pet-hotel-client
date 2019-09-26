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
        console.log('error in addPet', error);
    }
}

function* DeletePet(action) {
    try {
        let deletePet = yield axios.delete(`/pets/${action.payload}`);
        console.log('deletePet', deletePet.data);
        yield put({
            type: 'FETCH_PETS',
            payload: deletePet.data
        })
    } catch (error) {
        console.log('error in the DeletePet Saga', error);

    }
}

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPetsSaga);
    yield takeLatest('ADD_PET', addPet);
    yield takeLatest('DELETE_PET', DeletePet);
}

export default petSaga;
