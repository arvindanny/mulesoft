const { Pool } = require("pg"); 

const connectionString = 'postgres://danny:1234@localhost:5432/movies'; 

const pool = new Pool({
  connectionString,
});

(async function main(){
  const query = "SELECT * from movies";
  const result = await pool.query(query);
  for(let row of result.rows){
    console.log(row);
  }
})()
