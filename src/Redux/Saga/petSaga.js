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

function* deletePet(action) {
    try {
        let deletePet = yield axios.delete(`/pets/${action.payload}`);
        console.log('deletePet', deletePet.data);
        yield put({
            type: 'FETCH_PETS',
            payload: deletePet.data
        })
    } catch (error) {
        console.log('error in the deletePet Saga', error);

    }
}

function* patchPet(action) {
    try {
        yield axios.patch(`/pets/check/${action.payload}`);
        yield put({
            type: 'FETCH_PETS'
        });
    } catch (error) {
        console.log('error in the patchPet Saga', error);
    }
}

function* sortDate() {
    try {
        let pets = yield axios.get('/pets/sortDate');
        yield put({
            type: 'SET_PETS',
            payload: pets.data
        })

    } catch (error) {
        console.log('error in fetchPetsSaga', error);
    }
}

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPetsSaga);
    yield takeLatest('ADD_PET', addPet);
    yield takeLatest('DELETE_PET', deletePet);
    yield takeLatest('CHANGE_PET_STATUS', patchPet);
    yield takeLatest('SORT_DATE', sortDate);
}

export default petSaga;
