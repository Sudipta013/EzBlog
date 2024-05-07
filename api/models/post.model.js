import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://lapaas.com/wp-content/uploads/2019/04/How-to-start-a-Blog-Most-detailed-Guide-980x551-1.jpg',
        },
        category: {
            type: String,
            default: 'Uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },

    }, {timestamps: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;