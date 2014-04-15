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
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['example/bootstrap/**'],
                    dest: 'tmp/assets/'
                }]
            }
        },
        ghtml: {
            tmp: {
                options: {
                    template: 'template/'
                },
                files: {
                    'tmp/': 'example/bootstrap/**/*.{css,scss,sass,less,styl}'
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['clean', 'jshint', 'ghtml', 'copy']);
};