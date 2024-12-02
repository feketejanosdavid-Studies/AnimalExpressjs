const db = require('./db');

async function getDatas() {
    const rows = db.query(
        "SELECT * FROM animal" 
    )
    return rows?rows:[];
}

async function create(animal) {
    console.log("Animal:", animal);

    // const result = await db.query(
    //      `Insert into animal (Name, Species, Price
    //      Values ('${animal.Name}', '${animal.Species}', ${animal.Price});`
    // )

    const result = await db.query(`Insert Into animal (Name, Species, Price) values (?,?,?)`,
    [animal.Name, animal.Species, animal.Price])

    let message = "Animal not created";

    if (result.affectedRows){
        message = "Animal created";
    }
    return  {message}
}

async function update(id, animal) {
    const result= await db.query(
        `update animal set Name = ?, Species = ?, Price = ? where Id = ?`,
        [animal.Name, animal.Species, animal.Price, id]
    )

    let message = "Animal not updated";

    if (result.affectedRows){
        message = "Animal updated";
    }
    return  {message}
}

async function remove(id) {
    const result= await db.query(
        `delete from animal where Id = ?`,
        [id]
    )

    let message = "Animal not deleted";

    if (result.affectedRows){
        message = "Animal deleted";
    }
    return  {message}
}

module.exports={
    getDatas,
    create,
    update,
    remove
}