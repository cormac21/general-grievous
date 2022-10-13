import BASE_URL from "./endpoint";
import axios from "axios";
import {useState} from "react";

const usePostNewOrder = (newOrder) => {
    const endpoint = BASE_URL.concat('/api/v1/orders');
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);

    if (newOrder != undefined ){
      axios.post(endpoint, newOrder).then( response => {
        setData(response.data);
      }).catch(error => {
        setError(error);
      });
    }

    return { data, error };
}