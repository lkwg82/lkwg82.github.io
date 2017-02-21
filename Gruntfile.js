module.exports = function(grunt) {
    // load time-grunt and all grunt plugins found in the package.json
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        clean: ["www"],
        uncss: {
            dist: {
                files: {
                    'www/tidy.css': ['index.html']
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            dist: {
                src: 'www/tidy.css',
                dest: 'www/main.css'
            }
        },
        uglify: {
            my_target: {
                options: {
                    beautify: false,
                    mangle: true
                },
                files: {
                    'www/output.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/animatescroll/animatescroll.js',
                        'js/decorate-links.js',
                        'js/google-analytics.js',
                        'js/resourcetiming.js',
                        'js/language.js'
                    ],
                    'www/loadCSS.js': 'bower_components/loadcss/loadCSS.js'
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'www/index.html': ['index.html']
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
                    'www/index.html': 'www/index.html'
                }
            }
        },
        'string-replace': {
            async: {
                files: {
                    'www/': 'www/index.html'
                },
                options: {
                    replacements: [
                        // place files inline example
                        {
                            pattern: '<script src="output.js"></script>',
                            replacement: '<script src="output.js" async></script>'
                        }, {
                            pattern: /<link rel="stylesheet" href="(main.css)">/,
                            replacement: '<script> loadCSS("$1"); </script>'
                        }
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['img/**'],
                        dest: 'www'
                    }, {
                        expand: true,
                        src: ['favicon.ico'],
                        dest: 'www'
                    }
                ]
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 7,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif,JPG}'],
                    dest: 'www/img/'
                }]
            }
        },
        inline: {
            dist: {
                src: 'www/index.html'
            }
        },
        filerev: {
            dist: {
                src: [
                    'www/*.js',
                    'www/*.css',
                    'www/img/**/*.{png,jpg,JPG,jpeg,gif,webp,svg}',
                    'www/font/*'
                ]
            }
        },
        filerev_replace: {
            options: {
                assets_root: 'www'
            },
            compiled_assets: {
                src: 'www/*.{css,js}'
            },
            views: {
                src: 'www/index.html'
            }
        },
        watch: {
            files: [
                'Gruntfile.js',
                'css/*.css',
                'js/*.js',
                '*.json',
                'index.html'
            ],
            tasks: [
                'default', 'serve'
            ],
            options: {
                spawn: true,
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        },
        devUpdate: {
            main: {
                options: {
                    updateType: 'report', //just report outdated packages
                    reportUpdated: false, //don't report up-to-date packages
                    semver: true, //stay within semver when updating
                    packages: {
                        devDependencies: true, //only check for devDependencies
                        dependencies: false
                    },
                    packageJson: null, //use matchdep default findup to locate package.json
                    reportOnlyPkgs: [] //use updateType action on all packages
                }
            }
        },
        serve: {
            options: {
                port: 9000,
                'path': 'www'
            }
        }
    });

    grunt.loadNpmTasks('grunt-dev-update');
    grunt.loadNpmTasks('grunt-filerev-replace');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-uncss');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register custom grunt tasks

    grunt.registerTask('default', [
        'clean',
        'uncss',
        'cssmin',
        'uglify',
        'processhtml',
        'htmlmin',
        'string-replace',
        'copy',
        'imagemin',
        'inline',
        'filerev',
        'filerev_replace'
    ]);
};
