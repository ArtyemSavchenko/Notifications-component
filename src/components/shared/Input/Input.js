import { useId } from 'react';
import './Input.css';

const Input = ({ placeholder, ...restProps }) => {
  const id = useId();

  return (
    <div className="input-field">
      <input
        className="input-field__input"
        {...restProps}
        id={id}
        placeholder=" "
      />
      <label htmlFor={id} className="input-field__label">
        {placeholder}
      </label>
    </div>
  );
};
export default Input;
