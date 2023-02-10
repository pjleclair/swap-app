import "./swap.css"
import msgImg from "./images/Message.svg"
import notifImg from "./images/Notification.svg"
import userImg from "./images/User.svg"

const Swap = () => {
    return(
        <div className="swap--container">
            <div className="swap--header">
                <input id="search" type="search" placeholder="Search..."/>
                <img src={msgImg} alt="messages"/>
                <img src={notifImg} alt="notifs"/>
                <img id="user" src={userImg} alt="user"/>
            </div>
            <div className="convert--container">
                <div id="label">Convert</div>
                <div className="swap--convert"></div>
            </div>
            <div className="swap--assets"></div>
        </div>
    )
}

export default Swap;