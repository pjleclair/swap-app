import logo from "./images/logo.svg"
import logoDashboardSelected from "./images/dashboard-selected.svg"
import logoWallet from "./images/wallet.svg"
import logoTrade from "./images/swap.svg"
import logoMarket from "./images/market.svg"
import logoNotification from "./images/notification.svg"
import logoSettings from "./images/settings.svg"
import logoLogout from "./images/logout.svg"
import "./sidebar.css"

const Sidebar = () => {
    return(
        <div className="sb--container">
            <div className="sb--menu">
            <div className="sb--logo">
                <img className="logo" src={logo} alt="logo"/>
                <div>CryptoCompany</div>
            </div>
            <ul className="list--container">
                <li className="list--item"><img src={logoDashboardSelected} alt="icon"/>Dashboard</li>
                <li className="list--item"><img src={logoWallet} alt="icon"/>Wallet</li>
                <li className="list--item"><img src={logoTrade} alt="icon"/>Trade</li>
                <li className="list--item"><img src={logoMarket} alt="icon"/>Market</li>
                <li className="list--item"><img src={logoNotification} alt="icon"/>Notification</li>
                <li className="list--item"><img src={logoSettings} alt="icon"/>Settings</li>
            </ul>
            </div>
            <div className="sb--logout">
                <img src={logoLogout} alt="icon"/>
                <div>Log out</div>
            </div>
        </div>
    )
}

export default Sidebar;