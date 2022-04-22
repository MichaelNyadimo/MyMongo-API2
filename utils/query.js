module.exports = async (con, query, params) =>
new Promise((resolve, reject) => {
    const handler = (error, result) =>{
        if(error){
            reject(error);
            return;
        } else{
        }
        resolve(result);
    }
    con.query(query, params, (err, result) =>{
        result.json(result)
    });
});