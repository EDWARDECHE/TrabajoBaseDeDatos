const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema ({
    categoria: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    ortopedia:{
        type: String,
        required: true
    },
    protesis:{
        type: Number,
        require: true
    },
    precio:{
        type: Number,
    },
    obraSocial:{
        type: Boolean,
        require: true
    },
    receta:{
        type: Boolean,
        require: true
    }
})

const Ortopedia = mongoose.model("Ortopedia", schema)
module.exports = { Ortopedia }


