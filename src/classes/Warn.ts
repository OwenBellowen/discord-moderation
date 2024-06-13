import { Model, Document } from "mongoose";
import WarnModel, { Warns } from "../models/WarnModel";
import {
    Client,
    GuildMember,
    Interaction,
    User,
    time
} from "discord.js";

interface WarnConfig {
    useDefaultModel?: boolean;
    model?: Model<any | Document | Warns>;
}

export default class Warn {
    constructor(private client: Client, private config?: WarnConfig) {
        if (this.config) {
            if (this.config.useDefaultModel && this.config.model) {
                throw new Error("You may not use a custom model if you use the default model")
            } else {
                if (this.config.useDefaultModel) {
                    this.config.model = WarnModel;
                }
            }
        }
    }

    public async addWarn(
        interaction: Interaction,
        user: User | GuildMember,
        reason: string,
        moderator: User | GuildMember,
        timestamp?: Date
    ) {

    }
}