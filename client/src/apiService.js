import axios from 'axios'

const baseUrl = 'http://localhost:9000'
const apikey = 'live_iMUqJb7gjlT4vDMVIcb6qmUevcFeh246fAHXU0ijTVLgaXk1l4Eas68c9jsoaDhL';

const get = (url) => {
    return axios.get(`${baseUrl}${url}`, {
        params: {
            api_key: apikey
        }
    })
}


export default {get}
