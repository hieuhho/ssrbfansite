const fs = require('fs')
fs.writeFileSync('./.env',
`DB_HOST=${process.env.DB_HOST}\nDB_PASS=${process.env.DB_PASS}\nDB_USER=${process.env.DB_USER}\nDB_DATABASE=${process.env.DB_DATABASE}\n`
);
