
export interface GobotConfigOptions {

    name: string,
    description: string,
    author: string,
    version: string,
    services: {
        enabled: string[]
        discord: {
            token: string
        },
        irc: {
            servers: [
                {
                    address: string,
                    nickname: string,
                    channels: string[]
                }
            ]
        }
    },
    actions: [
        {
            question: string | object,
            response: string | object
        }
    ]

}
export interface GobotStartOptions {
    verbose?: true | false
}
