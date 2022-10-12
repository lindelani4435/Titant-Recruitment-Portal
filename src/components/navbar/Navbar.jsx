import './navbar.scss';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlined />
                </div>

                <div className="item">
                    <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Thoba Mabunda"
                        width="40px"
                        height="40px"
                        className="avatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar;