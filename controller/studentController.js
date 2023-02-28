import studentModel from "../models/Students.js"
class studentController{
    static createDoc = async (req, res)=>{
        try {
            // const doc = await studentModel.create(req.body)
            const doc = await studentModel.create({
                name:req.body.name,
                age:req.body.age,
                fee:req.body.fee
            })
            const r = await doc.save()
            res.status(201).send(r)
        } catch (error) {
            console.log(error)
        }
    }

    static allDoc = async (req, res)=>{
        try {
            const r = await studentModel.find()
            res.send(r)
        } catch (error) {
            console.log(error)
        }

    }

    static getSingleData = async (req,res)=>{
        const {d} = req.param
        try {
            const r = await studentModel.findOne(d)
            res.send(r)
        } catch (error) {
            console.log(error)
        }
    }

    static updateDoc = async (req,res)=>{
        const {d} = req.param
        try {
            // const r = await studentModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument:'after'})
            const r = await studentModel.findOneAndUpdate(d, req.body, {returnDocument:'after'})
            res.send(r)
        } catch (error) {
            console.log(error)
        }

    }

    static deleteDoc = async (req,res)=>{
        const {d} = req.param
        try {
            const r = await studentModel.findOneAndDelete(d)
            res.status(204).send(r)
        } catch (error) {
            console.log(error)
        }
    }
}

export default studentController