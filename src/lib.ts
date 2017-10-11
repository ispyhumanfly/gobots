/* tslint:enabled */

import * as Discord from "discord.js"
import * as IRC from "irc-upd"
import * as Bunyan from "bunyan"

export class Client {

    protected config: any

    constructor(config: Object){

        this.config = config

        this.config.log = Bunyan.createLogger({
            name: this.config.name,
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
                    path: `${this.config.name}.log`
                }
            ]
        })
    }
    listen(options: any) {
        this.config.services.enabled.forEach(service => {

            if(service == "discord") {
                let client = new Discord.Client()

                if(options.verbose)
                    this.config.log.info("Listening on Discord...")
            }

            if(service == "irc") {

                let client = new IRC.Client(
                    this.config.services.irc.servers[0].address,
                    this.config.services.irc.servers[0].nickname,
                {
                    channels: this.config.services.irc.servers[0].channels,
                })

                if(options.verbose)
                    this.config.log.info("Listening on IRC...")
            }
        })
    }
}
