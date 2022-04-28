const query = require('../utils/query');
const{All_Items} = require('../queries/user.queries');
const query = require('../utils/query');

ConstUser =require('../model/User');

const GetnewUser = async (req, res) =>{
const{ user, pwd } = req.body;
if (duplicate) return res,sendStatus(409); //conflict
}
;

exports.getAllTItems = function(req, res){
    Items.fund({}, function(err, data) {
        if(err) {
            res.send(err);
        }
    res.json(data);
});
};

exports.getAllTItems = async (req, res) =>{
    const con = await connection().catch((err) =>{
        throw err;
    });
};

const query = await query(con, All_Items);

if(items.length){
    res.json(items)
}

con.query(queries.All_Items, function(err, result, fields){
    if(err){
     }
     res.send(err);
}


.getItem = function(req, res) {
    Items.findById(req.params.taskId, function(err, data){
        if(err) {
            res.send(err);
        }
        res.json(data);
    });
})

exports.createUser = function(req, res) {
    const newUser = new User({
        name: req.body.name
    });
    newUser.save(function(err, data) {  
    if(err) {
        res.send(err);
    }
    res.json(data);
});
};
 
exports.createTask = function(req, res){
    con.query(queries.INSET_TASK, [req.body.name], function(err, result) {
        if(err) {
            res.send(err);
        }
        console.log(result);
        res.json({ message: 'Added successfully'});
    });
};
exports.updateItem = function(req, req) {
    con.query(
        queries.UPDATE_TASK,
        [req.body.name, req.body.status, req.params.tasksId],
        function(err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        }
    );
};
exports.deleteItem = function(req, res){
    con.query(queries.DELETE_ITEM, [req.params.taskId], function(err){
        if(err){
            res.send(err);
        }
        res.json({message: 'Deleted successfully'});
    });
};

const _buildValueString = (req) => {
    const body = req.body;
    const values = Object.keys(body).map(
        (key) => '${key} = ${escape(body[key]))' 
    )
    values.push('created_data = NOW()');
    values.join(',');
    return values;
};

exports.updateTask = async (req, res) => {
    const con = await connection().catch((err) => {
        throw err;
    })};
    
    const values = _buildValueString(res);

    const result = await query(
        con,
        UPDATE_TASK(req.user.id, req.params.taskId, values)
    ).catch(serverError(res));

    if(result.affectedRows == 1){
        res
        .status(500)
        .json({ msg: 'Update to task:'});
    }
    res.json(result);

    exports.deleteTask = async (req, res) => {
        const con = await connection().catch((err) =>{
            throw err;
        }
    )}

    const result1 = await query(
        con,
        DELETE_TASK(req.user.id, req.params.taskId)
    ).catch(serverError(err));
    if(result.affectedRows == 1){
        res
        .status(500)
        .json({ msg:'Unable to delete task'})
    }