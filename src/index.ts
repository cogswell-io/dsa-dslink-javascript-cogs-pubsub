import * as _ from 'lodash';
import 'source-map-support/register';

const ds = require('dslink');

const DIVISOR: number = 2;

export default function divide(stuff) {
    return _.map(stuff, (thing: number) => thing / DIVISOR);
}
