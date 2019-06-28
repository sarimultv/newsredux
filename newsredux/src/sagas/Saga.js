import {takeLatest,put,delay} from 'redux-saga/effects'
// import {delay} from 'redux-saga'

  function* addNewsAsync(){
    yield delay(3000);
    yield put({
        type: 'ADD_NEWS_ASYNC'
    });
}
export function* watchAddNews() {
    yield takeLatest('ADD_NEWS',addNewsAsync);
}