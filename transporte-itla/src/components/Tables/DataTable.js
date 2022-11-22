import { useEffect,useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { fetchApi } from "../../helpers/fetchApi.js"
import  Cookies  from "universal-cookie";

const cookies = new Cookies();
var usuario = cookies.get('usuario')

export const DataTable = ({rows, columns, footer,options}) => {

  const [selectionModel, setSelectionModel] = useState([]);
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
      onSelectionModelChange={(newSelectionModel) => {
        setSelectionModel(newSelectionModel);
      }}
      components={{
        Footer: () => footer
      }}
      selectionModel={selectionModel}
      {... options}
    />
  </div>
  )
}
