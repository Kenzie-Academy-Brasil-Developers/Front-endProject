/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
export const Input = forwardRef( ({error, label, ...rest}, ref) => {
    return(
        <div>
            <label className="label">{label}</label>
            <input className="form-input" ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
});