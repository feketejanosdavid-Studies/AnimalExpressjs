const db = require('./db');

async function getDatas() {
    const rows = db.query(
        "SELECT * FROM animal" 
    )
    return rows?rows:[];
}

module.exports={
    getDatas
}