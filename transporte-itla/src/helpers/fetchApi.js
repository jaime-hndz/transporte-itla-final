import { BaseUrl } from '../helpers/BaseUrl';
import axios from 'axios';

export const fetchApi = (endpoint, data, method ='GET') =>{
    var url = `${BaseUrl}${endpoint}`;

    console.log(url)
    console.log(data)
    if(method==='POST'){
      return axios.post(url, null,{
        params: data,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
    }else{
      return axios.get(url, {
        params: data,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
    }

}