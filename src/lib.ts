/* tslint:enabled */

import * as Discord from "discord.js"
import * as IRC from "irc-upd"
import * as Bunyan from "bunyan"

export class Server {

    public gobot: any

    constructor(gobot: Object){

        this.gobot = gobot

        this.gobot.log = Bunyan.createLogger({
            name: this.gobot.name,
            streams: [
                {
                    level: 'info',
                    stream: process.stdout
                },
                {
                    level: 'error',
                    stream: process.stderr
                },
                {
                    level: 'debug',
                    path: `${this.gobot.name}.log`
                }
            ]
        })
    }
    start(options: any) {
        this.gobot.services.enabled.forEach(service => {

            if(service == "discord") {
                let client = new Discord.Client()

                if(options.verbose)
                    this.gobot.log.info("Listening on Discord...")

                client.on("ready", () => {
                    console.log("I am ready!")
                })

                client.on("message", message => {
                    if (message.content === "ping") {
                        message.reply("pong");
                    }
                    if (message.content === "How much MS you take?") {
                        message.reply("A shit load...");
                    }
                    console.log(`${message.author.username}: ${message.content}`)
                })

                client.login("MjU4ODg2NDIxMDUyNTIyNDk4.DLoc1A.DHvne6EIslspUntLkpf73AD8PRE")

            }

            if(service == "irc") {

                let client = new IRC.Client(
                    this.gobot.services.irc.servers[0].address,
                    this.gobot.services.irc.servers[0].nickname,
                {
                    channels: this.gobot.services.irc.servers[0].channels,
                })

                if(options.verbose)
                    this.gobot.log.info("Listening on IRC...")
            }
        })
    }
}
