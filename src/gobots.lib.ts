/**
 * Gobots
 * @description An easy to use and highly customizable chat bot framework.
 */
import * as Discord from "discord.js"
import * as IRC from "irc-upd"
import { GobotStartOptions, GobotConfigOptions } from "./@types"

export default class Gobots {
    public gobot: GobotConfigOptions

    constructor(gobot: GobotConfigOptions) {
        this.gobot = gobot
    }
    public start(options: GobotStartOptions): boolean {
        for (const service of this.gobot.services.enabled) {
            switch (service) {
                /**
                 * Discord
                 * @description Here you will find the logic behind Gobots Discord integration.
                 */

                case "discord":
                    let discordClient = new Discord.Client()

                    if (options.verbose) console.info("Listening on Discord...")

                    discordClient.on("ready", () => {
                        console.info("I am ready!")
                    })

                    discordClient.on("message", (message) => {
                        for (const action of this.gobot.actions) {
                            if (action.question && message.content === action.question) message.reply(action.response)
                        }
                        console.log(`${message.author.username}: ${message.content}`)
                    })

                    discordClient.login(this.gobot.services.discord.token)
                    break

                case "irc":
                    for (let server of this.gobot.services.irc.servers) {
                        let ircClient = new IRC.Client(server.address, server.nickname, {
                            channels: server.channels || ["#gobots"]
                        })

                        if (options.verbose) console.info("Listening on IRC...")
                    }
                    break

                case "slack":
                    // TODO more to follow here...
                    break
            }
        }

        return true
    }
}
