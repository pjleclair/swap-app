import "./swap.css"
import msgImg from "./images/Message.svg"
import notifImg from "./images/Notification.svg"
import userImg from "./images/User.svg"
import upOnly from "./images/Up.svg"
import downOnly from "./images/Down.svg"
import btcLogo from "./images/btc-logo.svg"
import btcChart from "./images/btc-chart.svg"
import ethLogo from "./images/eth-logo.svg"
import ethChart from "./images/eth-chart.svg"
import ltcLogo from "./images/ltc-logo.svg"
import ltcChart from "./images/ltc-chart.svg"
import dogeLogo from "./images/doge-logo.svg"
import dogeChart from "./images/doge-chart.svg"

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
                <div className="swap--convert">
                    <div className="swapFrom--container"></div>
                    <div className="switch--div"></div>
                    <div className="swapTo--container"></div>
                    <div className="swap--container"></div>
                </div>
            </div>
            <div className="asset--header"><div id="header">My Assets</div><div id="selector">Popular</div></div>
            <div className="swap--assets">
                <div className="asset--container">
                    <div className="asset">
                        <img id="logo" src={btcLogo} alt="asset"/>
                        <div>
                            <div>Bitcoin</div>
                            <div id="ticker">BTC</div>
                        </div>
                    </div>
                    <img id="chart" src={btcChart} alt="asset--chart"/>
                    <div className="asset--vals">
                        <div>$17,780.16</div>
                        <div id="up" className="trend--1d">+1.2% <img src={upOnly} alt="up only"/></div>
                    </div>
                </div>
                <div className="asset--container">
                <div className="asset">
                        <img id="logo" src={ethLogo} alt="asset"/>
                        <div>
                            <div>Ethereum</div>
                            <div id="ticker">ETH</div>
                        </div>
                    </div>
                    <img id="chart" src={ethChart} alt="asset--chart"/>
                    <div className="asset--vals">
                        <div>$4,206.90</div>
                        <div id="down" className="trend--1d">-1.2% <img src={downOnly} alt="down only"/></div>
                    </div>
                </div>
                <div className="asset--container">
                    <div className="asset">
                        <img id="logo" src={ltcLogo} alt="asset"/>
                        <div>
                            <div>Litecoin</div>
                            <div id="ticker">LTC</div>
                        </div>
                    </div>
                    <img id="chart" src={ltcChart} alt="asset--chart"/>
                    <div className="asset--vals">
                        <div>$215.16</div>
                        <div id="up" className="trend--1d">+2.4% <img src={upOnly} alt="up only"/></div>
                    </div>
                </div>
                <div className="asset--container">
                    <div className="asset">
                        <img id="logo" src={dogeLogo} alt="asset"/>
                        <div>
                            <div>Dogecoin</div>
                            <div id="ticker">DOGE</div>
                        </div>
                    </div>
                    <img id="chart" src={dogeChart} alt="asset--chart"/>
                    <div className="asset--vals">
                        <div>$1.16</div>
                        <div id="down" className="trend--1d">-10.2% <img src={downOnly} alt="down only"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Swap;