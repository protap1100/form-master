import { useState } from "react";

const StateForm = () => {

    const [email, setEmail] = useState('Protapb23@gmail.com');
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [error,setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length  < 6){
            setError('Password Must Be 6 Character or longer');
        }else{
            console.log(password,name,email);
        }
    }

    const handleNameChange = (e) =>{
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = (e) =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleNameChange}
            type="text" name="name" /> <br />
            <input
               value={email} onChange={handleEmailChange}
            type="text" name="email"/> <br />

            <input
                onChange={handlePasswordChange}
            type="text" name="password"/> <br />
            {/* <button>Submit</button> */}
            <input type="submit" value="submit" />
        </form>
        {
            <p>{error}</p>
        }
    </div>
    );
};

export default StateForm;