


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../data/restaurant-app.db');

db.serialize(() => {
    const query = "SELECT * FROM users";
    // db.run(query);

    // const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    // for (let i = 0; i < 10; i++) {
    //     stmt.run("Ipsum " + i);
    // }
    // stmt.finalize();

    // db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    //     console.log(row.id + ": " + row.info);
    // });

    // db.each(query, (err, row) => {
    //     console.log(row.username + ": " + row.password);
    // });

    db.run('INSERT INTO users VALUES ("steven", "svj");')
});

db.close();


// Using built-in NodeJS

// const { DatabaseSync } = require('node:sqlite');
// const db = new DatabaseSync('../data/restaurant-app.db');


// const query = db.prepare(`
//     SELECT * FROM users;    
// `);

// console.log(query.all());

// for (const user of query.all()) {
//     console.log(user.username);
// }
