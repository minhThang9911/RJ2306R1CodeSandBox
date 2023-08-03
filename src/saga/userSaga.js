import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { DELETE_USER, DELETE_USER_SUCCESS, FETCH_USER, FETCH_USER_SUCCESS } from "../redux/action";


const BaseURL = "https://jsonplaceholder.typicode.com/users";
function* getUser(action) {
	try {
		const response = yield axios.get(BaseURL);
		yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
	} catch (error) {
		console.log("error - getUser : ", error);
	}
}

function* deleteUser(action){
	try {
		const res = yield axios.delete(`${BaseURL}/${action.payload}`)
		yield put({type:DELETE_USER_SUCCESS,payload:action.payload})
	}catch (e){
		console.log('error delete', e)
	}
}

export default function* rootSaga() {
	yield takeLatest(FETCH_USER, getUser);
	yield takeLatest(DELETE_USER,deleteUser)
}
