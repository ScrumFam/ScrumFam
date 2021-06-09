import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
// import { RenderCellExpand } from "./renderCellExpand";
// renderCell: RenderCellExpand

const columns = [
  {
    field: "id",
    headerName: "ID_HIDE",
    hide: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "assignedTo",
    headerName: "Assigned to User",
    width: 200,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "reward",
    headerName: "Reward",
    width: 150,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 150,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "dateLastUpdated",
    headerName: "Date Last Updated",
    width: 200,
    sortable: false,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "description",
    headerName: "Chore Description",
    width: 600,
    sortable: false,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [
  {
    id: "1",
    assignedTo: "David",
    reward: "$2",
    status: "Completed",
    dateLastUpdated: new Date().toDateString(),
    description: " wash the car and fill it with gas",
  },
  {
    id: "2",
    assignedTo: "David",
    reward: "$2",
    status: "Completed",
    dateLastUpdated: new Date().toDateString(),
    description: " wash the car and fill it with gas",
  },
  {
    id: "3",
    assignedTo: "David",
    reward: "$2",
    status: "Completed",
    dateLastUpdated: new Date().toDateString(),
    description: " wash the car and fill it with gas",
  },
  {
    id: "3",
    assignedTo: "David",
    reward: "$2",
    status: "Completed",
    dateLastUpdated: new Date().toDateString(),
    description: " wash the car and fill it with gas",
  },
  {
    id: "4",
    assignedTo: "David",
    reward: "$2",
    status: "Completed",
    dateLastUpdated: new Date().toDateString(),
    description: " wash the car and fill it with gas",
  },
  {
    id: "5",
    assignedTo: "David",
    reward: "$2",
    status: "Completed",
    dateLastUpdated: new Date().toDateString(),
    description: " wash the car and fill it with gas",
  },
  {
    id: "6",
    assignedTo: "David",
    reward: "$2",
    status: "Completed",
    dateLastUpdated: new Date().toDateString(),
    description: " wash the car and fill it with gas",
  },
];

// possible boilerplate for iterating over the actual data
// whole child data coming from object has been looped through
// for(let i=0; i < data.length; i++){
// prototype object for childData to show on each ros
// const childData = {
//   id: i,
//   assignedTo: data[i].assignedTo,
//   reward: data[i].reward,
//   status: data[i].status,
//   dateLastUpdated: data[i].date,
//   description: data[i].description
// };
//}

export default function ParentChoretable() {
  return (
    <div className="tableContainer" style={{ width: "100%", height: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
