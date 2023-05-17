import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
 
}

const Button = (props: ButtonProps) => {
  return (
    <button  className="green-btn">
        {props.text}
    </button>
  )
}

export default Button