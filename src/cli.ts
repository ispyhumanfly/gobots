/* tslint:enabled */

import * as Gobot from "./lib"

new Gobot.Client({
    name: "Eliza",
    description: "Communication between man and machine.",
    author: "Joseph Weizenbaum",
    version: "2.0.0",
    services: {
        enabled: ["discord", "irc"],
        discord: {
            token: "foo",
            actions: this.actions
        },
        irc: {
            servers: [
                {
                    address: "irc.freenode.net",
                    nickname: "foo",
                    password: "bar",
                    channels: ["#art", "#scene"],
                    actions: this.actions
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
}).listen(true)
