import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// DRY: Don't Repeat Yourself
//se optimiza, para no repetir los Buttons
const renderButtons=OnClickNumber=>{
    //se crea un array con los numeros de la calculadora, hasta el final el cero
    const numeros=[1,2,3,4,5,6,7,8,9,0]
    //se crea la funcion para que se pueda iterar de nuevo  y no se rompa el codigo
    //TENES CUIDADO CON EL ATRIBUTO KEY, ESTA ES UNA FORMA DE EVITAR UN WARNING
    const renderButton= numero=>(<Button key={numero} text={numero.toString()} clickHandler={OnClickNumber} />)
    //iterar desde el boton 1 hasta el 0
    return numeros.map(renderButton)

}

const Numbers = (props)=>{
    /**Aplicando Destructuring */
    const {OnClickNumber}= props

    return(
        <section className="numbers">
            {
                renderButtons(OnClickNumber)
            }
        </section>
    )
}
Numbers.propTypes ={
    OnClickNumber: PropTypes.func.isRequired
}
export default Numbers