const { fromJS }  = require('immutable');

export function getImmutableObject(object) {
    return fromJS(object);
};
