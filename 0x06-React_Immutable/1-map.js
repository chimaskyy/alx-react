const { Map } = require("immutable");

export default function getImmutableObject(object) {
  return Map(object);
}

