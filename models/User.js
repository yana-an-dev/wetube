import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UsderSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  gitHubId: Number
});

UsderSchema.plugin(passportLocalMongoose, { usernameField: "email" });
const model = mongoose.model("User", UsderSchema);

export default model;
