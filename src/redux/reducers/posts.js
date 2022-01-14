// api/posts 안의 함수 모두 불러오기
import * as postsAPI from "../../api/posts";

import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../../module/asyncUtils";

// 액션 타입 설정
// 포스트 여러 개 조회
// 요청 시작
const GET_POSTS = "GET_POSTS";
// 요청 성공
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
// 요청 실패
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

// 포스트 하나씩 조회
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// thunk 사용 시 모든 액션에 대해 액션 생성 함수 만들 필요가 없다.
// 그냥 thunk 함수에서 바로 액션 객체를 만들어줘도 된다.
// 포스트 전체 목록 가져오는 thunk 함수
// export const getPosts = () => async (dispatch) => {
//   // 요청 시작
//   dispatch({ type: GET_POSTS });

//   try {
//     // 포스트를 갖고오는 api 호출
//     const posts = await postsAPI.getPosts();
//     // 성공
//     dispatch({ type: GET_POSTS_SUCCESS, posts });
//   } catch (error) {
//     // 실패
//     dispatch({ type: GET_POSTS_ERROR, error });
//   }
// };

// ID에 맞는 포스트 가져오는 thunk 함수
// export const getPostId = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });

//   try {
//     const post = await postsAPI.getPostsId(id);
//     dispatch({ type: GET_POST_SUCCESS, post });
//   } catch (error) {
//     dispatch({ type: GET_POST_ERROR, error });
//   }
// };

// asyncUtils.js 파일로 리팩토링 후 thunk 함수 생성
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostsId);

// 초기화
const initialState = {
  //   posts: {
  //     loading: false,
  //     data: null,
  //     error: null,
  //   },
  //   post: {
  //     loading: false,
  //     data: null,
  //     error: null,
  //   },
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// 리듀서 생성
// 리팩토링 후
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, "posts");
      return postsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      const postReducer = handleAsyncActions(GET_POST, "post");
      return postReducer(state, action);
    default:
      return state;
  }
}

// 리팩토링 전
// export default function postReducer(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: null,
//         },
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: action.posts,
//           error: null,
//         },
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: action.error,
//         },
//       };
//     case GET_POST:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: null,
//         },
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: action.post,
//           error: null,
//         },
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: action.error,
//         },
//       };
//     default:
//       return state;
//   }
// }
