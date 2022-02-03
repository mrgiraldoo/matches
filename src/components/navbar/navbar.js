import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <h1>Select the League for Which You Want to See the Matches</h1>
            <ul>
                <li><NavLink to="/wc">FiFa WorldCup</NavLink></li>
                <li><NavLink to="/cl">Champions League</NavLink></li>
                <li><NavLink to="/bl1">BundesLiga</NavLink></li>
                <li><NavLink to="/ded">Eredivisive</NavLink></li>
                <li><NavLink to="/bsa">Brasileirao</NavLink></li>
                <li><NavLink to="/pd">Primera Division</NavLink></li>
                <li><NavLink to="/fl1">Ligue 1</NavLink></li>
                <li><NavLink to="/elc">Championship</NavLink></li>
                <li><NavLink to="/ppl">Primera Liga</NavLink></li>
                <li><NavLink to="/ec">European Championship</NavLink></li>
                <li><NavLink to="/sa">Serie A</NavLink></li>
                <li><NavLink to="/pl">Premier League</NavLink></li>
                <li><NavLink to="/cli">Copa Libertadores</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;

