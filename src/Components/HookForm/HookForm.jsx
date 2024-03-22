import UseInputState from "../../Hooks/UseInputState";

const HookForm = () => {

    // const [name,handleNameChange] = UseInputState('Rojoni');
    const emailState = UseInputState('Protap@gmail.com');

    const handleSubmit = e =>{
        console.log(emailState.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> <br /> */}
                <input {...emailState} type="text" name="email"/> <br />
                <input type="text" name="phone"/> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;