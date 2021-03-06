//load the mongoose
const mongoose = require('mongoose');

//creating the schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
            type: String,
            required: true
    },
    duedate: {
            type: String
    }
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
