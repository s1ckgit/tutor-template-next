import mongoose from "mongoose";

const { Schema } = mongoose;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { versionKey: false });

const BlogPost = mongoose.models['blog-post'] || mongoose.model('blog-post', BlogPostSchema);

export default BlogPost;
