interface TitleProps {
    text:string;
}

const Title = (props:TitleProps) => {
  return (
    <div className="title">
        <h1 >
            {props.text}
        </h1>
        <h2>
         Bring called seed first of third give itself now ment
        </h2>
    </div>
  )
}

export default Title