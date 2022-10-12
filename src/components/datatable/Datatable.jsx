import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import {advisersRows, adviserColumns} from "../../data/sampledata";
import './datatable.scss';
import {Link} from "react-router-dom";

const Datatable = () => {

    const actionColumn = [
        {field: "action", headerName:'Actions', width:200, renderCell:() => {
            return (
                <div className="cellAction">
                    <Link className="link" to="/advisers/test">
                        <div className="viewButton">View</div>
                    </Link>

                    <div className="deleteButton">Delete</div>
                </div>
            );
            },}
    ];

    return (

        <DataGrid
            className="datatable"
            rows={advisersRows}
            columns={adviserColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    )
}

export default Datatable;