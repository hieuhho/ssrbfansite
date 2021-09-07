const fs = require('fs')
fs.writeFileSync('./.env',
`REACT_APP_DB_HOST=${process.env.DB_HOST}\nREACT_APP_DB_PASS=${process.env.DB_PASS}\nREACT_APP_DB_USER=${process.env.DB_USER}\nREACT_APP_DB_DATABASE=${process.env.DB_DATABASE}\n`
);
