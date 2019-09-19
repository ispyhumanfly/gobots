import { GobotStartOptions, GobotConfigOptions } from "./@types";
export default class Gobots {
    gobot: GobotConfigOptions;
    constructor(gobot: GobotConfigOptions);
    start(options: GobotStartOptions): boolean;
}
