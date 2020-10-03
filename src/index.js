import { configureDI } from "./dependency-injection.js";
import { ForestControl } from "./forest-control/forest-control.js";

const instructions = "5 5\n3 3 E\nL\n3 3 E\nMMRMMRMRRM\n1 2 N\nLMLMLMLMMLMLMLMLMM";
/**
 * @type {import('./forest-control/forest-control-types').IForestControl}
 */
const forestControl = configureDI().get(ForestControl.name);
forestControl.process(instructions);
