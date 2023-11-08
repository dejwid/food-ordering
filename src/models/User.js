import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String},
  image: {type: String},
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema);