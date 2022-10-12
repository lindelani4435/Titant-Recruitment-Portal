import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './single.scss';
import MyTable from "../../components/table/Table";
const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                className="itemImage"
                                src="https://randomuser.me/api/portraits/women/9.jpg"
                                 alt="MyAdviser" />
                            <div className="details">
                                <h1 className="itemTitle">Given L. Ndlovu</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue"> givenl@ndlovu.co.za</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Specialities:</span>
                                    <span className="itemValue">Loans, Business Finance</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Location:</span>
                                    <span className="itemValue">Acardia, Pretoria</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Status:</span>
                                    <span className="itemValue">online</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Consultations:</span>
                                    <span className="itemValue">11</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Bookings:</span>
                                    <span className="itemValue">17</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Clients:</span>
                                    <span className="itemValue">8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom">
                    <h1 className="title">Consultations</h1>
                    <MyTable />
                </div>
            </div>
        </div>
    )
}

export default Single;