import styles from './Button.module.css' // If using module Css import styles, else just import the file

interface Props {
    children: string;
    color?: `primary` | `secondary`; // ? means its optional, | means OR for string literals (so you can only accept certain arguments)
    onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  return (
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button