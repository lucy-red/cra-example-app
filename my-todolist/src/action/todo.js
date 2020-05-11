/**
 * 할일을 완료하기 위한 액션 명령어와 액션 메서드 구현
 */

//action type (명령어)
const ADD_TODO = 'ADD_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

//action creators (액션 메서드)
//reducer로 데이터 생성을 요청
//비즈니스 로직을 주로 액션 메서드에서 개발하기 때문에 액션 메서드는
//컴포넌트의 재활용을 높이고 코드를 관리하는데 중요한 역할을 함
function addTodo(text) {
	return { type: ADD_TODO,  text};
}

// 비동기 작업을 하는 코드
// dispatch 메서드를 파라미터로 받는 함수를 만들고
// 응담이 온 후 dispatch()메서드를 호출하면 정상적으로 비동기통신을 적용할 수 있음
function addTodo2(text) {
  return (dispatch) => {
	return fetch("api/add.json").then(
		res => res.json().then(data => dispatch(addTodo(data.status)))
	);
  };
}

function complete({complete, id}){
    return {type : COMPLETE_TODO, complete, id};
}

function complete2(data2) {
    return (dispatch) => {
      return fetch("api/add.json").then(
          res => res.json().then(data => dispatch(complete(data2)))
      );
    };
  }

  export  {
	ADD_TODO,
	COMPLETE_TODO,
	addTodo,
	addTodo2,
    complete,
    complete2
}