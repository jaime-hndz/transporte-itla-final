import { BaseUrl } from '../helpers/BaseUrl';
import axios from 'axios';


export const fetchApi = (endpoint, data, method ='GET') =>{
    var url = `${BaseUrl}${endpoint}`;
    return axios.get(url, {
      params: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })

}