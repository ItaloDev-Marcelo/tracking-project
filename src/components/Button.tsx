
type buttonProps = {
    text: string,
    style?: string
}

const Button = ({text, style}:buttonProps) => {
  return <button className={style}>{text}</button>
}

export default Button