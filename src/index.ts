import * as _ from 'lodash';
import { Duration } from 'dslink';
import 'source-map-support/register';

const DIVISOR: number = 2;

export default function divide(stuff) {
    return _.map(stuff, (thing: number) => thing / DIVISOR);
}
