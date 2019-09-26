import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

const fakePets = [{
    id: 1,
    owner_id: 1,
    pet_name: 'Geronimo',
    breed: 'Tibetan Mastiff',
    color: 'orange',
    is_checked_in: true,
    checked_in_date: '09/22/19',
},
    {
    id: 2,
    owner_id: 4,
    pet_name: "Baba-Yaga",
    breed: "Australian Shepherd",
    color: "cookies and cream",
    is_checked_in: true,
    checked_in_date: '09/19/19'
    },
    {
        id: 3,
        owner_id: 2,
        pet_name: "Jeff",
        breed: "rat",
        color: "brown",
        is_checked_in: true,
        checked_in_date: '09/22/19'
    },
]

function* fetchPetsSaga() {
    try {
        // let pets = yield axios.get('/pets');
        
        yield put({
            type: 'SET_PETS',
            // payload: pets.data
            payload: fakePets
        })
        
    } catch (error) {
        console.log('error in fetchPetsSaga', error);
        
    }
} 

function* addPets(action) {
    try {
        yield axios.post('/pets', action.payload);
    } catch (error) {
        console.log('error in addPets', error);
    }
}

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPetsSaga);
    yield takeLatest('ADD_PETS', addPets);
}

export default petSaga;