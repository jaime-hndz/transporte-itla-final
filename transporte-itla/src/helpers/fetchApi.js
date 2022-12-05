import { BaseUrl } from '../helpers/BaseUrl';
import axios from 'axios';

export const fetchApi = (endpoint, data, method ='GET') =>{
    var url = `${BaseUrl}${endpoint}`;
    switch (method) {
      case 'POST':
        return axios.post(url, null,{
          params: data,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
      case 'PUT':
        return axios.put(url, data,{
          // params: data,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
      default:
        return axios.get(url, {
          params: data,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
    }    

}