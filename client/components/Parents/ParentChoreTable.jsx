import * as React from 'react'
import { XGrid } from '@material-ui/x-grid'
// import { RenderCellExpand } from "./renderCellExpand";
// renderCell: RenderCellExpand

const columns = [
  { field: 'id', headerName: 'ID_HIDE', hide: true},
  { field: 'assignedTo', headerName: 'Assigned to User', width: 200 },
  { field: 'reward', headerName: 'Reward', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    width: 150
  },
  { field: 'dateLastUpdated', headerName: 'Date Last Updated', width: 150, sortable: false}
  { field: 'description', headerName: 'Chore Description', width: 600, sortable: false}
  // {
  //   field: 'fullName',
  //   headerName: 'Date Last Updated',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: params =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(
  //       params.id,
  //       'lastName'
  //     ) || ''}`
  // }
]

const rows = [
  { id: '', assignedTo: 'David', reward: '$2', status: 'Completed', dateLastUpdated: JSON.stringify(new Date(Date.now())), description: ' wash the car and fill it with gas' },
]

export default function ParentChoretable () {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <XGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  )
}
