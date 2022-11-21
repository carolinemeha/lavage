import axios from 'axios';


// First we need to import axios.js

// Next we make an 'instance' of it
const api = axios.create({
// .. where we make our configurations
    baseURL: 'https://api.example.com'
});

// Where you would set stuff like your 'Authorization' header, etc ...
api.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff


export default api;