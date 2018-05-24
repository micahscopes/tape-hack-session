# tape-vue-hack-session
Tape is a javascript implementation of the [Test Anything Protocol](https://testanything.org/).
## Motivation
Tape is a big hit in the press:
- [Why I use Tape
Instead of Mocha &
So Should You](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)
- [TAP &amp; Tape, the awesome way to test JavaScript](https://macwright.org/2014/03/11/tape-is-cool.html)

## About this boilerplate
I forked this from [Edd Yerburgh](), who wrote an accompanying article that you can read for more inspiration:
- [Write blazing fast Vue unit tests with Tape and Vue Test Utils](https://medium.freecodecamp.org/how-to-write-blazing-fast-vue-unit-tests-with-tape-and-vue-test-utils-be069ccd4acf)
## Getting Started

``` bash
git clone https://github.com/micahscopes/tape-vue-hack-session.git
cd tape-vue-hack-session
yarn install
yarn test
```

(Note: use `yarn test`, not the usual `node test.js` used for basic Tape.)

## Using Tape
You can find the Tape documentation [here](https://github.com/substack/tape/blob/master/readme.markdown)

## Stuff to try:
- #### Write a test with the `t.end` method.
    `t.end` declares that all of a test's assertions should have passed by now.

- #### Write a test with the `t.plan` method.
    `t.plan` tells Tape how many assertions it should expect for a given test.  When it has received the expected number of assertions, `t.end` is called automatically.  This serves as a way of waiting for asynchronous assertions.

- #### Test a Vue component using Vue Test Utils
    Vue Test Utils is included for bringing Vue components into your Tape tests.  You can use [this guide](https://vue-test-utils.vuejs.org/guides/getting-started.html) for inspiration.  There are also a few examples in [test/specs](./test/specs).

- #### Try something with JSDOM
    JSDOM is included.  So you should be able to write a test that uses `document` or `window`.
    
- #### Setup a watch library:
    - https://www.npmjs.com/package/tape-watcher
    - https://www.npmjs.com/package/tape-watch

## Other useful information

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Credits
- [eddyerburgh](https://github.com/eddyerburgh/tape-vue-example)
- [hchiam](https://github.com/hchiam/tape-vue-example)