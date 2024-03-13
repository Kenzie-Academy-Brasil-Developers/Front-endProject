/* eslint-disable react/prop-types */
import { useState, forwardRef } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
// eslint-disable-next-line react/display-name
export const InputPassword = forwardRef(({ error, label, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true); 

    return (
        <div className="input-container">
    <label className='label'>{label}</label>
    <div className="input-wrapper">
        <input className='form-input' type={isHidden ? "password" : "text"} ref={ref} {...rest} />
        <button type="button" className="icon-button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
        </button>
    </div>
    {error ? <p>{error.message}</p> : null}
</div>
    );
});
