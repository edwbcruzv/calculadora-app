//importacion del contenerdor principal
/**Orden de importaciones:
 * 1 componentes instalados
 * 2 componentes propios
 * 3 archivos .CSS
 */
/* eslint no-eval: 0*/
import React,{useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'  // llamando al archivo .CSS


//generacion de la funcion del componente
const App=()=>{ //funcion flecha o arrow function

    //1er posicion: valor por defecto del texto
    //2da posicion: fincion que va a permitir modificar ese texto
    const [stack, setStack] = useState("")

    const items=words(stack,/[^-^+^*^/]+/g)
    console.log("Render de App",items) // puebas de funcionamiento en consola
    //consta value= items.length >0 ? 

    //funcion llamada por el componente Numbers
    const OnClickNumberFunction=(text)=>{
        console.log("Click Number:",text)
        setStack(`${stack}${text}`)
    }
    //funcion llamada por el componente MathOperations
    const onClickOperationFunction=(text)=>{
        console.log("operation",text)
        setStack(`${stack}${text}`)
    }
    //funcion llamada por el componente MathOperations
    const onClickEqualFunction=(text)=>{
        console.log("equal:",text)
        setStack(eval(stack).toString()) // hace la operacion al momento de dar =
    }
    //funcion llamada por el componente Functions
    const onClickClearFunction=(text)=>{
        console.log("Clear")
        setStack("")
    }
    //funcion llamada por el componente Functions
    const onClickDeletefunction=(text)=>{
        if (stack.length>0){
            console.log("Delete")
            setStack(stack.slice(0,-1))
        }
    }

    return (
    <main className='react-calculator'>
        Calculadora App (App)
        {/*Zona de componentes*/ }
        {/*componente donde se muestra el resultado*/}
        <Result value={items[items.length-1]} /> 
        {/** componente de los numeros */}
        <Numbers OnClickNumber={OnClickNumberFunction}/> 
         {/** componente de las funciones */}
        <Functions onClickClear={onClickClearFunction} onClickDelete={onClickDeletefunction}/> 
        {/**componentes de las operaciones */}
        <MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction} />
    </main>)
}

//exportacion
export default App