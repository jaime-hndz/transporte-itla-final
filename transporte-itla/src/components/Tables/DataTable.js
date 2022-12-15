import { DataGrid } from '@mui/x-data-grid';
// import { useEffect } from 'react';


export const DataTable = ({rows, columns, footer,rowId, seleccion, setSeleccion}) => {

  // useEffect(() => {
  //   console.log(seleccion)
  // }, [seleccion])
  

  return (
    <div className='datatable-div'>
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
        onSelectionModelChange={setSeleccion}
        selectionModel={seleccion}
      />
    </div>
  )
}
