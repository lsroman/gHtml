module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            file: ['tmp']
        },
        ghtml: {
            tmp: {
                options: {
                    template: 'template/'
                },
                files: {
                    'tmp/': 'example/**/*.css'
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'ghtml']);
};