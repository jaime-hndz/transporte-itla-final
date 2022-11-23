import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';


export const DataTable = ({rows, columns, footer,rowId, seleccion, setSeleccion}) => {

  useEffect(() => {
    console.log(seleccion)
  }, [seleccion])
  

  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      getRowId={(row) => row[rowId]}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
      onSelectionModelChange={(newSelectionModel) => {
        setSeleccion(newSelectionModel);
      }}
      components={{
        Footer: () => footer
      }}
      selectionModel={seleccion}
    />
  </div>
  )
}
