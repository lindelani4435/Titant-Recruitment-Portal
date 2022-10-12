import './widget.scss';
import {
    CalendarMonthOutlined,
    KeyboardArrowUp,
    People,
    Diversity3,
    VideoChat
} from "@mui/icons-material";

const Widget = ( {type}) => {

    let data;

    switch (type){
        case "adviser":
            data = {
                title: 'ADVISERS',
                link: 'View All Advisers',
                counter: 138,
                icon: <People className="icon" />
            };

            break;

        case "client":
            data = {
                title: 'CLIENTS',
                counter: 1072,
                link: 'View All Clients',
                icon: <Diversity3 className="icon" />
            };

            break;

        case "consultation":
            data = {
                title: 'CONSULTATIONS',
                counter: 43,
                link: 'View All Consultations',
                icon: <VideoChat className="icon" />
            };

            break;

        case "booking":
            data = {
                title: 'BOOKINGS',
                counter: 78,
                link: 'View All Bookings',
                icon: <CalendarMonthOutlined className="icon" />
            };

            break;
        default:
            break;
    }
    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.counter}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    0%
                </div>
                {data.icon}
            </div>
        </div>
    );
}
export default  Widget;