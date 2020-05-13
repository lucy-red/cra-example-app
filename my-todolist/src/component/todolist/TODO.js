import React, { Component } from "react";
/**
 * 프레젠테이션 컴포넌트
 * 비즈니스 로직은 컨테이너 컴포넌트에서 개발한다.
 * 그래야 프레젠테이션 컴포넌트인 TODO컴포넌트의 재활용성이 높아진다.
 * 
 */
class TODO extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         style: {
    //             backgroundColor: getRandomColor()
    //         }
    //     }
    // }


    render() {

        const {
            id, todo, complete, onClick            
        }  = this.props; //컨테이너 컴포넌트에서 받은 props

        return (
            <li id={id}
                onClick = {()=>onClick({
                    id:id
                    ,complete:!complete
                })}
                className={`${!!complete ? 'complete' : ''} Todolist-li`} 
            >
            <span>{todo}</span>
            <button >완료</button>
            </li>
        );

    }
}

export default TODO;