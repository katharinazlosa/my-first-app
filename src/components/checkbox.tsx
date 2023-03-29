import {useState} from 'react';

const Checkbox = ({label}) => {
    const [checked, setChecked] = useState(false);
  
    return (
        <div className="checkbox-container">
            <label>
                <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)} />
                {label}
            </label>
        </div>
        
    ); 
}

export default Checkbox;