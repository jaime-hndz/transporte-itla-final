import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';


export const DataTable = ({rows, columns, footer,rowId, seleccion, onSeleccion}) => {

  useEffect(() => {
    // console.log(seleccion)
  }, [seleccion])
  

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      getRowId={(row) => row[rowId]}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
      components={{
        Footer: () => footer
      }}
      checkboxSelection={footer ? true : false}
      onSelectionModelChange={onSeleccion}
      selectionModel={seleccion}
    />
  </div>
  )
}
