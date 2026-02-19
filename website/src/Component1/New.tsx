import "./New.css"
import img from '../assets/img27.jpg'
function New(){
return(
    <>
     <div className="main">
        <div className="top">
            <div className="l-1"><h1>Cini</h1></div>
        </div>
        <div className="bottom">
            <div className="r-1">
                <div className="top1">
                    <div className="left">
                        <input type="search"className="search" />
                    </div>
                    <div className="right"><h3>Search</h3></div>
                </div>
                <div className="bottom1">
                    <div className="top2">
                        <img src={img} alt=""srcSet="" className="img"/></div>
                    <div className="bottom2">
                        <div className="b1"><h3>Kabza</h3></div>
                        <div className="b2"><h4>Language:English</h4></div>
                        <div className="b3">
                            <div className="left2"><h3>Genre</h3></div>
                            <h3>:</h3>
                            <div className="right2"><h4>2022-04-22</h4></div>
                        </div>
                        <div className="b4"><h4>A Viking price seeks revenge</h4></div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>

)
}
export default New