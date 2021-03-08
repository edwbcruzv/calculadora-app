import React from 'react'
import PropTypes from 'prop-types'

const Result = (props)=>{  
    /**Aplicando Destructuring */
    const {value}= props
    
    console.log("Renderizacion de Result",value) //mostrando en consola lo que se manda desde App.jsx
    //se regresa el componente para que se muestre en el componente App.jsx
    return(
        <div className="result">
            <span>{value}</span>
        </div>
    )
}
/**Nos sirve para validar propiedades i evitar errores,
 * esperamos un string 
 */
Result.propTypes={
    value: PropTypes.string.isRequired
}
/**En el caso de que no exista el atributo "value"
 * se establece por defecto un valor
 */
Result.defaultProps ={
    value: "0"
}

export default Result  //paso importante para que se pueda usar el componente