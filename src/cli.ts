/* tslint:enabled */

import * as Gobot from "./lib"

new Gobot.Server({
    name: "Eliza",
    description: "Communication between man and machine.",
    author: "Joseph Weizenbaum",
    version: "2.0.0",
    services: {
        enabled: ["discord", "irc"],
        discord: {
            token: "super_crazy_long_string"
        },
        irc: {
            servers: [
                {
                    address: "irc.freenode.net",
                    nickname: `${this.name}`,
                    password: "bar",
                    channels: ["#gobot", "#gobots"]
                }
            ]
        }
    },
    actions: [
        {
            "Eliza, what version are you?": `Hi, I am version ${this.version}.`,
            "Eliza, who created you?": `Hi, I was created by ${this.author}.`
        }
    ]
}).start({verbose: true})
