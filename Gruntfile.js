module.exports = function (grunt) {
    // load time-grunt and all grunt plugins found in the package.json
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        csslint: {
            test: {
                options: {
                    import: 2
                },
                src: [
                    'css/style.css'
                ]
            }
        },

        uncss: {
            dist: {
                files: {
                    'assets/tidy.css': ['index.html']
                }
            }
        },

        concat: {
            dist: {
                src: [
                        'assets/tidy.css',
                        'libs/video-js-4.10.2/video-js.css' ],
                dest: 'assets/main.css'
            }
        },

        cssmin: {
            dist: {
                src: 'assets/main.css',
                dest: 'assets/main.min.css'
            }
        },
        processhtml: {
            dist: {
                files: {
                    'index.min.html': ['index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.min2.html': 'index.min.html'
                }
            }
        },

        uglify: {
            my_target: {
                options: {
                    beautify: false,
                    mangle: true
                },
                files: {
                    'assets/output.min.js': [
                            'js/jquery-2.0.3.min.js',
//                            'js/jquery.lazyload.1.9.3.min.js',
                            'js/animatescroll.js',
                            'js/decorate-links.js',
                            'js/google-analytics.js',
                            'libs/video-js-4.10.2/video.js'
                    ]
                }
            }
        },

        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll  serve'
            }
        },

        watch: {
            files: [
                'css/*.css',
                'js/*.js',
                'libs/**/*',
                'index.html',
            ],
            tasks: [
                'default',
                'shell:jekyllServe'
            ],
            options: {
                spawn: false,
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // register custom grunt tasks

    grunt.registerTask('default', [
        'uncss',
        'concat',
        'cssmin',
        'uglify',
        'processhtml',
        'htmlmin'
                        ]);
    grunt.registerTask('test', [ 'csslint' ]);
    grunt.registerTask('deploy', [ 'concat', 'cssmin', 'shell:jekyllBuild' ])
};