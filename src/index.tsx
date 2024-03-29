import React from 'react';
import styles from './index.less';

export interface ButtonProps {
  size?: 'large' | 'default';
}

const Button: React.FC<ButtonProps> = function Button(props) {
  return (
    <button
      type="button"
      className={styles.button}
      style={{
        fontSize: props.size === 'large' ? 40 : 20,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
