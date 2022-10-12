import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './new.scss';
import {useState, useRef} from "react";
import { firestore } from "../../firestore";
import {addDoc,collection} from "@firebase/firestore";

const New = ({inputs, title}) => {
    const [file, setFile] = useState();
    const [newsInfor, setnewsInfor] = useState();

    //Creating attribute reference
    const avaterRef = useRef();
    

    //Creating reference to collection from the database
    const collectionRef = collection(firestore,"News");

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(inputs);

        //Add data to firestore
        let data= {
            avater:avaterRef.current.value,
        };

        try {
            addDoc(collectionRef,data);
        alert("Url submited👌👌👌");   
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                             alt="Image" />
                    </div>
                    <div className="right">
                        <form className="form" onSubmit={handleSave}>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}
                                    ref={avaterRef} />
                                </div>
                                ))}
                            {/* <div className="formInput">
                                <label htmlFor="file">
                                    IconHere
                                </label>
                                <input
                                    type="file"
                                    placeholder="DYK Caption"
                                    id="file"
                                    onChange={e=>setFile(e.target.files[0])}
                                />
                            </div> */}
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;