const fs = require('fs')
fs.writeFileSync('./.env',
`DB_HOST=${DB_HOST}\nDB_PASS=${DB_PASS}\nDB_USER=${DB_USER}\nDB_DATABASE=${DB_DATABASE}\n`
);
