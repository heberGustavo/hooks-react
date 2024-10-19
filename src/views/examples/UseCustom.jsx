import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'

const UseCustom = (props) => {
    
    //const [count, , dec] = useCounter();
    const [count, inc, dec] = useCounter();

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercicio 01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <buttuon className="btn" onClick={() => dec()} >-1</buttuon>
                    <buttuon className="btn" onClick={() => inc()} >+1</buttuon>
                </div>
            </div>
        </div>
    )
}

export default UseCustom
