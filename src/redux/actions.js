// 1. action 타입 생성
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

// 2. action 생성 함수 생성
// 전역 state에 새로운 값을 넣어주는 역할을 한다.
// { type: ADD_TODO, text: '할일' }
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// { type: COMPLETE_TODO, index: 1 }
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}

// users
// 깃허브 API 호출을 시작하는 것을 의미
export const GET_USERS_START = "GET_USERS_START";
// 깃허브 API 호출에 대한 응답 성공
export const GET_USRES_SUCCESS = "GET_USERS_SUCCESS";
// 깃허브 API 호출에 대한 응답 실패
export const GET_USRES_FAIL = "GET_USERS_FAIL";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USRES_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USRES_FAIL,
    error,
  };
}
