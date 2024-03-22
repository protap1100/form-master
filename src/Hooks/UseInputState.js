import { useState } from "react"

const UseInputState = (defaultValue = "") => {
    const [value,setInputValue] = useState(defaultValue);

    // const handleChange = (e) =>{
    //     setInputValue(e.target.value);
    // }

     const onChange = (e) =>{
        setInputValue(e.target.value);
    }

    // return [inputValue, handleChange];
    return {
         value,
         onChange
        }
} 

export default UseInputState;