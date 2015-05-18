'use strict';

module.exports = function () {
    return {
        options: {
            separator: ';',
        },
        vendor: {
            files: {
                'src/javascript/vendor.js': [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/mustache/mustache.js',
                    'bower_components/moment/moment.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js',
                    'bower_components/jquery.sparkline.build/dist/jquery.sparkline.js',
                    'bower_components/fastclick/lib/fastclick.js',
                    'bower_components/responsejs/response.js',
                    'bower_components/unveil/jquery.unveil.js',
                    'bower_components/jquery-placeholder/jquery.placeholder.js',
                    'bower_components/jquery-waypoints/lib/jquery.waypoints.js',
                    'bower_components/jquery-waypoints/lib/shortcuts/inview.js',
                    'bower_components/jquery.transit/jquery.transit.js',
                    'bower_components/jquery-slimscroll/jquery.slimscroll.js'
                ]
            }
        }
    };
};