# webcomponents-test
Testing webcomponents and webpack


* I did apt-get install webpack
* then I had webpack.config.js
* module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    }
    };
* then ran webpack
webpack --mode=development
webpack --mode=production