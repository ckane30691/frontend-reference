class MyClass {
    constructor(options) {
        this.foo = options.foo;
        this.bar = options.bar;
    }

    foobar() {
        let foobar = this.foo.concat(this.bar)
        return foobar
    }
}

module.exports = MyClass