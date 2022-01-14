// 액션 타입 생성
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수 생성
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

// thunk 함수 생성
// 이때, getState를 쓰지 않는다면 굳이 파라미터로 받을 필요가 없다.
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 초기값
const initialState = 0;

// 리듀서 생성
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
