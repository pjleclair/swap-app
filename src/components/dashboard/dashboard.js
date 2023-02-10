import "./dashboard.css"
import logoAdd from "./images/add.svg"
import logoWithdraw from "./images/withdraw.svg"
import logoConvert from "./images/convert.svg"
import upOnly from "./images/Up.svg"
import downOnly from "./images/Down.svg"


const Dashboard = () => {
    return(
        <div className="db--container">
            <div className="section-1">
                <div className="s1--header">
                    <h1>Dashboard</h1>
                    <button id="db">Manage</button>
                </div>
                <div className="s1--balance">
                    <div id="header">Total balance</div>
                    <div className="bal--container">
                        <div id="bal">$69,420</div>
                        <div id="t1d">+1.2% <img src={upOnly} alt="up only"/></div>
                    </div>
                </div>
                <div className="s1--trends">
                    <div className="trend--container">
                        <div>
                            <div id="t-label">Today</div>
                            <div id="t1d" className="trend--1d">+1.2% <img src={upOnly} alt="up only"/></div>
                        </div>
                        <div className="trend--div"></div>
                        <div>
                            <div id="t-label">7 Days</div>
                            <div className="trend--7d">+4.3% <img src={upOnly} alt="up only"/></div>
                        </div>
                        <div className="trend--div"></div>
                        <div>
                            <div id="t-label">30 days</div>
                            <div className="trend--30d">-11.5% <img src={downOnly} alt="down only"/></div>
                        </div>
                    </div>
                    <div className="acc--container">
                        <div id="func">
                            <img src={logoAdd} alt="add"/>
                            <div>Add</div>
                        </div>
                        <div id="func">
                            <img src={logoWithdraw} alt="withdraw"/>
                            <div>Withdraw</div>
                        </div>
                        <div id="func">
                            <img src={logoConvert} alt="convert"/>
                            <div>Convert</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="section-2">
                <div></div>
            </div>
        </div>
    )
}

export default Dashboard