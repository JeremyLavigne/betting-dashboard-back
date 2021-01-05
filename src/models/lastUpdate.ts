import mongoose from "mongoose";

// interface ILastUpdate {
//   championship: string;
//   date: Date;
// }

const lastUpdateSchema = new mongoose.Schema({
  championship: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// lastUpdateSchema.statics.build = (attr: ILastUpdate) => {
//   return new LastUpdate(attr);
// };

const LastUpdate = mongoose.model("LastUpdate", lastUpdateSchema);

export default LastUpdate;
