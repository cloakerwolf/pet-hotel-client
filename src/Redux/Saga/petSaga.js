import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

const fakePets = [{
    id: 1,
    owner: 'Aaron',
    pet_name: 'Geronimo',
    breed: 'Tibetan Mastiff',
    color: 'orange',
    status: true,
    date: '09/22/19',
},
    {
    id: 2,
    owner: "Chris",
    pet_name: "Baba-Yaga",
    breed: "Australian Shepherd",
    color: "cookies and cream",
    status: true,
    date: '09/19/19'
    },
    {
        id: 3,
        owner: "Karl",
        pet_name: "Jeff",
        breed: "rat",
        color: "brown",
        status: true,
        date: '09/22/19'
    },
]

function* fetchPetsSaga() {
    try {
        let pets = yield axios.get('/pets');

        yield put({
            type: 'SET_PETS',
            // payload: pets.data
            payload: pets.data
        })

    } catch (error) {
        console.log('error in fetchPetsSaga', error);

    }
}

function* petSaga() {
    yield takeLatest('FETCH_PETS', fetchPetsSaga);
}

export default petSaga;
