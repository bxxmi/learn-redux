// promise에 기반한 thunk함수를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성
  // 만약, 여러 개의 파라미터를 전달해야한다면 객체 타입의 파라미터를 받아오면 된다.
  // ex) writeComment({ postId: 1, text: '블라블라' });
  return (param) => async (dispatch) => {
    dispatch({ type, param });

    try {
      // 결과물의 이름을 payload로 통일
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (error) {
      dispatch({ type: ERROR, payload: error, error: true });
    }
  };
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수
export const reducerUtils = {
  // 초기 data 값은 기본적으로 null 이지만 변경 가능
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),
  // 로딩 중 상태
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  // 성공 상태
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  // 실패 상태
  error: (error) => ({
    loading: false,
    data: null,
    error,
  }),
};

// 비동기 관련 액션 처리하는 리듀서
// type은 액션의 타입, key는 상태의 key (ex) posts, post
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading,
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
