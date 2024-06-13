import { Schema, Document, model } from "mongoose";

interface IWarn {
    id: string;
    moderator: string;
    reason: string;
    timestamp: string; // Unix timestamp using time()
}

export interface Warns extends Document {
    guildID: string;
    userID: string;
    warns: IWarn[];
}

const WarnsSchema = new Schema({
    guildID: { type: String, required: true },
    userID: { type: String, required: true },
    warns: { type: Array<IWarn>, default: [] }
});

export default model<Warns>("Warns", WarnsSchema);