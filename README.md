# dill

[![CircleCI](https://circleci.com/gh/kenlyau/dill.svg?style=svg)](https://circleci.com/gh/kenlyau/dill)
[![codecov](https://codecov.io/gh/kenlyau/dill/branch/master/graph/badge.svg)](https://codecov.io/gh/kenlyau/dill)
[![npm package](https://img.shields.io/npm/v/dilljs.svg?style=flat-square)](https://www.npmjs.org/package/dilljs)
[![NPM downloads](http://img.shields.io/npm/dm/dilljs.svg?style=flat-square)](http://www.npmtrends.com/dilljs)

My Util of Javascript Funcation

### Install

In browser:

```
<script scr="./dill.min.js"></script>
```

Using npm:

```
$ npm i --save dilljs
```

- date

date().format('yyyy-MM-dd hh:mm')

- isEmpty

isEmpty([])

/isEmpty({})

/isEmpty('')

- group

group([1,2,3,4,5], 3)

// [[1,2,3],[4,5]]
