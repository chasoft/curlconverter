const axios = require('axios');

const response = await axios.put('http://localhost:28139/upload', {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: '@new_file'
});
