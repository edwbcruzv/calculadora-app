//importando React
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = (props)=>{
    /**Aplicando Destructuring */
    const { onClickOperation, onClickEqual}=props

    return(
        <section className="math-operations">
            <Button text="+" clickHandler={onClickOperation}/>
            <Button text="-" clickHandler={onClickOperation}/>
            <Button text="*" clickHandler={onClickOperation}/>
            <Button text="/" clickHandler={onClickOperation}/>
            <Button text="=" clickHandler={onClickEqual}/>   
        </section>
    )
}

MathOperations.propTypes ={
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations