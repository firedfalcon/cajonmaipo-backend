const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})

pool.connect()
    .then(pool => {
        console.log('Connected to Supabase...')
        return pool
    })
    .catch(err => console.log('Database Connection Failed!: ', err));

module.exports = pool;