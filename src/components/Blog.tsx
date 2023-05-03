import Title from "./Title";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import b1 from "../assets/img/b1.jpg.webp";
import b2 from "../assets/img/b2.jpg.webp";
import b3 from "../assets/img/b3.jpg.webp";

const Blog = () => {
  return (
    <div className='blog'>
        <div className="container">
            <div className="blog-content">
                <Title text="LATEST BLOG"/>
                <div className="blog-card-blog">
                    <div className="blog-card">
                        <img src={b1} alt="picture" />
                        <div className="blog-text">
                            <div className="blog-title">
                                <span>By Admin</span>
                                <span>2 Comments</span>
                            </div>
                            <h1>Ford clever bed stops your sleeping partner hogging the whole</h1>
                            <p>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth</p>
                            <Link to="">LEARN MORE <BsArrowRight/></Link>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={b2} alt="picture" />
                        <div className="blog-text">
                            <div className="blog-title">
                            <span>By Admin</span>
                                <span>2 Comments</span>
                            </div>
                            <h1>Ford clever bed stops your sleeping partner hogging the whole</h1>
                            <p>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth</p>
                            <Link to="">LEARN MORE <BsArrowRight/></Link>
                        </div>
                    </div>
                    <div className="blog-card">
                        <img src={b3} alt="picture" />
                        <div className="blog-text">
                            <div className="blog-title">
                            <span>By Admin</span>
                                <span>2 Comments</span>
                            </div>
                            <h1>Ford clever bed stops your sleeping partner hogging the whole</h1>
                            <p>Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth</p>
                            <Link to="">LEARN MORE <BsArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog