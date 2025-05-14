import StartFirebase from "./firebase2";
import React from "react";
import { ref, onValue } from 'firebase/database';
import{Table} from 'react-bootstrap';
import Nave from "./Nave";
import './docctor.css';
const db = StartFirebase();

export class Hosspital extends React.Component{
    constructor() {
    
        super();
       
        this.state = {tableData : []}
        }
    componentDidMount(){
        const dbRef = ref(db, 'HospitalBedBooking');

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableData: records});
        });
    }
    render(){
        return(
            <div  >
                <Nave />
            <div className="vbb"><Table  striped bordered hover variant="dark">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Default</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Location</th>
                        <th>Name of the Physician</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row,index)=>{
                        return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{row.key}</td>
                            <td>{row.data.Name}</td>
                            <td>{row.data.PhoneNumber}</td>
                            <td>{row.data.location}</td>
                            <td>{row.data.Phy}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            </div>
            </div>
        )
    }
}