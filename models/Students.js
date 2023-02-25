import mongoose, { mongo } from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true},
    fee:{type:mongoose.Decimal128, required:true, validate: (v)=>{v>=5000}}
})

const studentModel = mongoose.model("student", studentSchema)

export default studentModel