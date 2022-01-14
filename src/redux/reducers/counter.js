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
