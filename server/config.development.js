module.exports = {
    "restApiRoot": "/" + process.env.API_PATH,
    "host": process.env.API_HOST || "localhost",
    "port": process.env.API_PORT || 3000,
    "remoting": {
        "context": false,
        "rest": {
            "handleErrors": true,
            "normalizeHttpPath": false,
            "xml": false
        },
        "json": {
            "strict": false,
            "limit": "100kb"
        },
        "urlencoded": {
            "extended": true,
            "limit": "100kb"
        },
        "cors": false
    }
};