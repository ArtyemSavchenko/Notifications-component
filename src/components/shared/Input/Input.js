import { useId } from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, ...restProps }) => {
  const id = useId();

  return (
    <div className={styles.inputField}>
      <input
        className={styles.inputField__input}
        {...restProps}
        id={id}
        placeholder=" "
      />
      <label htmlFor={id} className={styles.inputField__label}>
        {placeholder}
      </label>
    </div>
  );
};
export default Input;
