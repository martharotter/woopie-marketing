module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            css: {
               src: [
                     'css/320andup-scss.css',
                     'css/flexslider.css',
                     'css/lightbox.css',
                     'css/stylesheet.css',
                    ],
                dest: 'css/combined.css'
            },
            dist: {
                src: [
                    'js/helper.js', 
                    'js/jquery.flexslider.js', 
                    'js/jquery.leanModal.min.js', 
                    'js/lightbox.js', 
                    'js/modernizr-2.5.3-min.js',
                    'js/plugins.js',
                    'js/script.js',
                    'js/selectivizr-min.js',
                ],
                dest: 'js/production.js',
            }
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
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);

};
