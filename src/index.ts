import * as _ from "lodash";
import "source-map-support/register";

const DIVISOR: number = 2;

export default function divide(stuff: number[]): number[] {
    return _.map(stuff, (thing: number) => thing / DIVISOR);
}
