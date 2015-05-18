'use strict';

var path = require('path');
var argv = require('yargs').argv;
var target = '';

// Target - specified the working target
if(argv.backend) {
    target = 'backend';
} else if(argv.frontend) {
    target = 'frontend';
} else if(argv.docs) {
    target = 'docs';
}

module.exports = function (grunt) {
    /** Load all grunt related task */
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        /** Concat task */
        concat: require('./grunt/concat')(),

        /** Copy task */
        copy: require('./grunt/copy')(),

        /** Clean task */
        clean: require('./grunt/clean')(target),

        /** Watch task */
        less: require('./grunt/less')(),

        /** Autoprefixer task */
        autoprefixer: require('./grunt/autoprefixer')(),

        /** JShint task */
        jshint: require('./grunt/jshint')(),

        /** Shell task */
        shell: require('./grunt/shell')(target),

        /** Connect task */
        connect: require('./grunt/connect')(target),

        /** Watch task */
        watch: require('./grunt/watch')(target),

        /** Cssmin task */
        cssmin: require('./grunt/cssmin')(path),

        /** uglify task */
        uglify: require('./grunt/uglify')(path),

        /** imagemin task */
        imagemin: require('./grunt/imagemin')(path)
    });

    /**
     * serve task
     * @usage: grunt serve
     */
    grunt.registerTask('serve', [
        'concat',
        'copy:bower',
        'clean:src',
        'less',
        'autoprefixer',
        'jshint:src',
        'shell:jekyll',
        'connect',
        'watch'
    ]);


    /**
     * dist task
     * @usage: grunt serve
     */
    var distTask = [
        'clean:dist',
        'shell:build',
        'concat',
        'copy:bower',
        'copy:dist'
    ];

    /** if --min flag is present */
    if(argv.min) {
        distTask.push('cssmin:dist', 'uglify:dist', 'imagemin:dist');
    }

    grunt.registerTask('dist', distTask);
};