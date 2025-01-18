
import {Schema,model} from 'mongoose'

const studentSchema = new Schema({
    username:{
        type:String
    },
    studentid:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    }
})

const Student=model('student',studentSchema)

export {Student}
