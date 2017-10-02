module.exports = {
    "db": {
        "host": process.env.DB_HOST || "localhost",
        "port": process.env.DB_PORT || 27017,
        "database": process.env.DB_NAME,
        "password": process.env.DB_PASS,
        "name": "db",
        "user": process.env.DB_USER,
        "connector": "mongodb"
    }
};