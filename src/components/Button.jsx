//importando React
import React from 'react'
import PropTypes from 'prop-types'

//componente funcional
const Button =(props)=>{
    /**Aplicando Destructuring */
    const {type, text, clickHandler}=props;

    return (
        <button className={type} onClick={()=>{
         //se captura el click sobre el boton y asi se selecciona lo que se quiere hacer
                console.log("Click en el Button");
                //mandando el numero hacia fuera en cada click
                clickHandler(text)
            }
        }>
            <span>{text}</span>
        </button>
    )
}

//Realizando validaciones con proptypes
Button.prototype= {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

//exportacion, paso importante paraq ue se pueda usar 
export default Button
