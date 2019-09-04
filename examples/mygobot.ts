import Gobots from "../src/gobots"

new Gobots({
    name: "Eliza",
    description: "Communication between man and machine.",
    author: "Dan Stephenson",
    version: "1.0.0",
    services: {
        enabled: ["discord", "irc"],
        discord: {
            token: "NjE4ODE1NzAzMjA5NzM4MjQw.XW_M-A.yblvfkvVgPxWoe-jgglftqd7kik"
        },
        irc: {
            servers: [
                {
                    address: "irc.freenode.net",
                    nickname: "danallmight",
                    channels: ["#gobot", "#gobots"]
                }
            ]
        }
    },
    actions: [
        {
            question: "The question.",
            response: "The response"
        }
    ]
}).start({verbose: true})
