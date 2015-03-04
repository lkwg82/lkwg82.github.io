module.exports = function (grunt) {
    // load time-grunt and all grunt plugins found in the package.json
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
	      clean: ["tmp", "www"],
        uncss: {
            dist: {
                files: {
                    'tmp/tidy.css': ['index.html']
                }
            }
        },
        concat: {
            dist: {
                src: [
                        'tmp/tidy.css',
                        'libs/video-js-4.10.2/video-js.css' ],
                dest: 'tmp/main.css'
            }
        },
	      criticalcss: {
            custom: {
                options: {
                    url: "index.html",
                    width: 1200,
                    height: 800,
                    outputfile: "tmp/critical.css",
                    filename: "tmp/main.css", // Using path.resolve( path.join( ... ) ) is a good idea here
                    buffer: 800*1024,
                    ignoreConsole: false
                }
            }
        },
        cssmin: {
            dist: {
                src: 'tmp/main.css',
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
                            'js/jquery-2.0.3.min.js',
                            'js/jquery.lazyload.1.9.3.min.js',
                            'js/animatescroll.js',
                            'js/decorate-links.js',
                            'js/google-analytics.js',
                            'libs/video-js-4.10.2/video.js'
                    ]
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'tmp/index.min.html': ['index.html']
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
                    'www/index.html': 'tmp/index.min.html'
                }
            }
        },
        copy: {
          main: {
            files: [
              // includes files within path and its sub-directories
              {expand: true, src: ['img/**'], dest: 'www'},
              {expand: true, src: ['font/**'], dest: 'www'},
              {expand: true, src: ['favicon.ico'], dest: 'www'},
            ],
          },
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
        } ,
        watch: {
            files: [
		            'Gruntfile.js',
		            '.csslintrc',
                'css/*.css',
                'js/*.js',
                '*.json',
                'libs/**/*',
                'index.html',
            ],
            tasks: [
                'default'
            ],
            options: {
                spawn: false,
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks('grunt-filerev-replace');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-uncss');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register custom grunt tasks

    grunt.registerTask('default', [
	      'clean',
        'uncss',
        'concat',
        'cssmin',
	      'criticalcss',
        'uglify',
        'processhtml',
        'htmlmin',
	      'copy',
	      'filerev',
	      'filerev_replace'
    ]);
};
