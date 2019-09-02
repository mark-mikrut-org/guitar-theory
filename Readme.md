# guitar-theory

Help guitar players with basic theory questions

## Install

```sh
npm install --save @markyoung58/guitar-theory
```

## API

```
var { fifthOf, getChord } = require('guitar-theory')

fifthOf(key) => string
getChord(key, degree) => string
```

## Example

```js
var {fifthOf, getChord } = require('guitar-theory')

console.log(fifthOf('C')) // 'G'
console.log(getChord('D', 5)) // 'A'
```

## License

ISC
