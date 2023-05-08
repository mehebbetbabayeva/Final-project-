import {Link} from "react-router-dom";
interface TitleNameProps{
    text:string;
    
}

const PageTitle = (props:TitleNameProps) => {
  return (
   <div className="page--title">
     <div className="container">
      <div className='page-title'>
        <div className="title-name">
                <h1>{props.text}</h1>
                <p>Very us move be blessed multiply night</p>
        </div>
        <div className="title-link">
            <Link to="/">Home</Link>/
            <span>{props.text}</span>
        </div>
    </div>
    </div>
   </div>
  )
}

export default PageTitle