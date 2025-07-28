import mongoose,{model, Schema} from "mongoose";
const ObjectId = Schema.Types.ObjectId;

const Users = new Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true, unique: true },
    userPassword: { type: String, required: true }
});

const Tags = new Schema({
    title: { type: String, required: true, unique: true }
});

const contentTypes = ['image', 'video', 'audio', 'article'];

const Contents = new Schema({
    link: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    tags: [{ type: ObjectId, ref: 'Tags', required: true }],
    userId: { type: ObjectId, ref: 'Users', required: true }
});

const Links = new Schema({
    hash: { type: String, required: true },
    userId: { type: ObjectId, ref: 'Users', required: true, unique:true}
});

export const usersModel = model('Users', Users);
export const TagsModel = model('Tags', Tags);
export const contentModel = model('Contents', Contents);
export const linksModel = model('Links', Links);