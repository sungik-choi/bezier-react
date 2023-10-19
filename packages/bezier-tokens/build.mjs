import StyleDictionary from 'style-dictionary-utils'

const myStyleDictionary = StyleDictionary.extend({
  "platforms": {
    "ts": {
      "transforms": ['color/hexAlpha', 'shadow/css'],
      "files": [{
        "filter": "isSource",
        "destination": "dist",
        "format": "javascript/esm",
      }]
    }
  }
});

myStyleDictionary.buildAllPlatforms();
