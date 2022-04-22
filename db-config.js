const {CREATE_USERS_TABLE} = require('./queries/user.queries');
const {CREATE_USERS_TABLE} = require('./queries/tasks.queries');
const query = require('./utils/query');

const host = process.env.DB_USER || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_DATABASE || 'tododb';

module.exports = async (params);
newPromise(async(resolve. reject));{
    const con = mymongo.createConnection({
        host,
        user,
        password,
        database,
    });
    const userTableCreated = await query(con, CREATE_USERS_TABLE).catch(
        (err));{
            reject(err);
        }

}

const tasksTableCreated = await query (con, CREATE_USERS_TABLE).catch(
    (err)); {
reject(err);
    }

    !!tasksTableCreated

    if(!!userTableCreated) {
        console.log('Tables have been created')
        resolve(con);
    }