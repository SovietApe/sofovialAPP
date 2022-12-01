var pool = require('./bd');

async function insertDifusion(obj){
    try{
        var query = "insert into difusion set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports={insertDifusion}