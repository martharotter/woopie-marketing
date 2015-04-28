module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            css: {
               src: [
                     'css/320andup-scss.css',
                     'css/lib/flexslider.css',
                     'css/lib/lightbox.css',
                     'css/flexslider.override.css',
                     'css/flipper.css',
                     'css/stylesheet.css',
                    ],
                dest: 'css/combined.css'
            },
            js: {
                src: [
                    'js/lib/jquery.flexslider.js', 
                    'js/lib/jquery.leanModal.min.js', 
                    'js/lib/lightbox.js', 
                    'js/lib/modernizr-2.5.3-min.js',
                    'js/lib/selectivizr-min.js',
                    'js/helper.js', 
                    'js/script.js',
                    'js/flipper.js',
                ],
                dest: 'js/production.js',
            }
        },
        jshint: {
            "options": {
                "evil": false,
                "expr": true,
                "-W069": true
            },
            beforeconcat: [ 'js/helper.js', 'js/lib/jquery.leanModal.js', 'js/lib/lightbox.js', 'js/script.js' ],
            afterconcat: []
        },
        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'js/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            }
        },
        cssmin: {
            css:{
                src: 'css/combined.css',
                dest: 'css/combined.min.css'
            }
        },
        validation: {
            options: {
                stoponerror: false,
                relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] // ignores these errorjws
            },
            files: {
                src: ['index.html',
                      'portfolio.html',
                      'pricing.html',
                      'features.html',
                      'contact.html',
                      'press.html',
                      'brochure/*.html',
                      'business/*.html',
                      'casestudies/*.html',
                      'education/*.html',
                      'fly/*.html',
                      'help/*.html',
                      'help_beta/*.html',
                      'info/*.html',
                      'magazine/*.html',
                      'makeawishsample/*.html',
                      'miscscamples/*.html',
                      'portfolio/*.html',
                      'samples/*.html',
                      'themes/*.html'
                    ]
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-html-validation');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'jshint', 'uglify', 'cssmin', 'validation']);
    grunt.registerTask('imagemin', ['imagemin']);
    grunt.registerTask('validate', ['validation']);
};
