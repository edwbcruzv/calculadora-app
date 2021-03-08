//importando React
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions =(props)=> {

    /**Aplicando Destructuring */
    const { onClickClear, onClickDelete}=props

    return(
        <section className="functions">
            <Button type="button-long-text" text="Clear" clickHandler={onClickClear}/>
            <Button text="&larr;" clickHandler={onClickDelete}/>
        </section>

    )
    
}

Functions.propTypes ={
    onClickClear: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default Functions