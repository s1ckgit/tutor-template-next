import mongoose from "mongoose"

const {Schema} = mongoose

const CommentSchema = new Schema({
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {versionKey: false})

const Comment = mongoose.models['comment'] || mongoose.model('comment', CommentSchema)

export default Comment