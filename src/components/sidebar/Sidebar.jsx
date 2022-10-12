import './sidebar.scss';
import {Dashboard,HelpOutline,People,
    Diversity3,Info,Newspaper} from '@mui/icons-material';
import {Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    MyAdviserBO
                </span>
            </div>
            <hr />
                <div className="center">
                    <ul>
                        <p className="title">MAIN</p>
                        <Link className="link" to="/">
                            <li> <Dashboard  className="icon" /> <span>Dashboard</span></li>
                        </Link>
                        <p className="title">USERS</p>
                        <Link className="link" to="/advisers">
                            <li><People  className="icon" /><span>Advisers</span></li>
                        </Link>
                        <Link className="link" to="/clients">
                            <li><Diversity3  className="icon" /><span>Clients</span></li>
                        </Link>

                        <p className="title">CONTENT</p>
                        <Link className="link" to="/questions">
                            <li><HelpOutline  className="icon" />  <span>Questions</span></li>
                        </Link>
                        <Link className="link" to="/dyk">
                            <li><Info className="icon" /> <span>Did You Know</span></li>
                        </Link>
                        <Link className="link" to="/news">
                            <li><Newspaper className="icon" /><span>News</span></li>
                        </Link>
                    </ul>
                </div>
            <hr />
                <div className="bottom">
                    <hr />
                    <button type="button" className="btn">Sign Out</button>
                    <span>Version 1.0.0-beta</span>
                    <span>Powered by Jaspa</span>
                </div>
        </div>
    );
}

export default Sidebar;