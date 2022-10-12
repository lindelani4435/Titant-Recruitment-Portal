import Sidebar from "../../components/sidebar/Sidebar";
import './home.scss';
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Table from "../../components/table/Table";
import MyTable from "../../components/table/Table";

const Home = () => {
  return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
                <Widget type="adviser"/>
                <Widget type="client" />
                <Widget type="consultation" />
                <Widget type="booking" />
            </div>
            <div className="listContainer">
                <div className="listTile">
                    Latest Transactions
                    <MyTable />
                </div>
            </div>
        </div>
      </div>
  )
}

export default Home;