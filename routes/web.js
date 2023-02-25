import express from 'express'
import studentController from '../controller/studentController.js'
const router = express.Router()

router.get("/", studentController.allDoc)
router.post("/", studentController.createDoc)
router.get("/:id", studentController.getSingleData)
router.put("/:id", studentController.updateDoc)
router.delete("/:id", studentController.deleteDoc)



export default router