import {useState} from 'react';

const Form = () => {
    const [value, setValue] = useState('');
    
    const handleSubmit = () => {
        alert('A name was submitted: ' + value);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;