import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { type } from '@testing-library/user-event/dist/type';

const initialState = {
    cart: [],
    products: [],
    favorites: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 };
        case 'login':
            return { ...state, user: action.payload };
        case 'numberMult7':
            return {...state, number: state.number * 7 }
        case 'numberDiv25':
            return {...state, number: parseInt(state.number / 25) }
        case 'numberN':
            return {...state, number: state.number + action.payload }
        default:
            return state;
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user}</span>
                ) : (
                    <span className="text">Sem usuário</span>
                )}
                <span className="text">{state.number}</span>
                
                <button className="btn" onClick={() => dispatch({ type: "login", payload: "Heber G" })}>Login</button>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberMult7" })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberDiv25" })} >/25</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberN", payload: 1000 })}>Add number</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
