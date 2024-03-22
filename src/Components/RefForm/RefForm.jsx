import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {

    const  nameRef = useRef(null); 
    const  emailRef = useRef(null); 
    const  passwordRef = useRef(null); 
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(nameRef.current.value !== 'string' && isNaN(passwordRef.current.value)){
            console.log('Please Type Your name in string' + 'And password is number ')
        }else{
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
        }
    }

    useEffect (()=>{
        nameRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} defaultValue="Protap Biswas" type="text" name="name" /> <br />
                <input ref={emailRef} type="text" name="email"/> <br />
                <input ref={passwordRef } type="text" name="phone"/> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;