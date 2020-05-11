import React, { Component } from "react";
import { connect } from "react-redux";
import { complete } from "../../action/todo";
import Todo from "./TODO";
/**
 * 컨테이너 컴포넌트 역할
 * 프레젠테이션 컴포넌트의 prop에 state를 설정하고,
 * 액션을 보내는 함수를 설정
 * */
 class TODOList extends Component {
    

     render () {
         
        const {
             todos,
             onClick
         } = this.props;

         return (
             <ul>
                 {todos.map(todo=>
                    <Todo 
                        key = {todo.id}
                        onClick = {onClick}
                        {...todo}
                    />
                )}
             </ul>
         )
     }
 }

//컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 전달하는 state
const todolistStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
//컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 액션을 보내는 함수
const todolistDispatchToProps = (dispatch) => {
    return {
        onClick(data) {
            console.log(">>>>>>> ", data)
            dispatch(complete(data)) //액션 메서드
        }
    }
}

//연결
//prop은 컨테이너 컴포넌트에서 연결해 사용. 
//컨테이너 컴포넌트에서 프레젠테이션 컴포넌트로 state와 dispatch()메서드를 전달해야할때
//connect() 메서드 사용
//첫번째 파라미터: 현재 state를받는 함수, 
export default connect(todolistStateToProps, todolistDispatchToProps)(TODOList);