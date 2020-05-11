import todoAction from "../action/index";

/**
 * reducer : 액션 메서드에서 변경한 상태를 받아 기존의 상태를 
 * 새로운 상태로 변경하는 일을 한다.
 * 
 * 다음은 액션 메서드에서 TODO 컴포넌트를 추가한 상태를 적용하는
 * 리듀서를 구현한 코드
 */
const {ADD_TODO, COMPLETE_TODO} = todoAction.todo;

const todo = (state, action) => {

    switch (action.type) {
        case ADD_TODO:
          return {
            id :Math.floor(Math.random() * 100) + 1,
            todo: action.text,
            completed: false
          };
        case COMPLETE_TODO:
          if (state.id !== action.id) {
            return state;
          }
    
          return {
            ...state,
            complete: !state.complete
          };
        default:
          return state;
      }
}

const todos = (state = [], action) => {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state, todo(undefined, action)
            ];
        case COMPLETE_TODO:
            return state.map(t => todo(t, action))
        default:
            return state;
    }

}

export default todos;