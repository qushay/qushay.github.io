'use strict';

module.exports = function () {
    return {
        dist: {
            expand: true,
            cwd: 'src/',
            src: [
                '**',
                '!**/psd/**',
                '!**/*.psd',
                '!**/*.less',
                '!**/less/**',
                '!templates/**'
            ],
            dest: 'dist/'
        },
        bower: {
            files: [
                // bootbox
                { src: 'bower_components/bootbox/bootbox.js', dest: 'src/plugins/bootbox/js/bootbox.js' },

                // datatables and tabletools
                { src: 'bower_components/datatables/media/js/jquery.dataTables.js', dest: 'src/plugins/datatables/js/jquery.dataTables.js' },
                { src: 'bower_components/datatables-tabletools/js/dataTables.tableTools.js', dest: 'src/plugins/datatables/tabletools/js/dataTables.tableTools.js' },
                { src: 'bower_components/datatables-tabletools/swf/copy_csv_xls.swf', dest: 'src/plugins/datatables/tabletools/swf/copy_csv_xls.swf' },
                { src: 'bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf', dest: 'src/plugins/datatables/tabletools/swf/copy_csv_xls_pdf.swf' },

                // blueimp file upload
                { src: 'bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js', dest: 'src/plugins/fileupload/js/vendor/jquery.ui.widget.js' },
                { src: 'bower_components/blueimp-load-image/js/load-image.js', dest: 'src/plugins/fileupload/js/vendor/load-image.js' },
                { src: 'bower_components/blueimp-load-image/js/load-image-meta.js', dest: 'src/plugins/fileupload/js/vendor/load-image-meta.js' },
                { src: 'bower_components/blueimp-load-image/js/load-image-exif.js', dest: 'src/plugins/fileupload/js/vendor/load-image-exif.js' },
                { src: 'bower_components/blueimp-load-image/js/load-image-ios.js', dest: 'src/plugins/fileupload/js/vendor/load-image-ios.js' },
                { src: 'bower_components/blueimp-canvas-to-blob/js/canvas-to-blob.js', dest: 'src/plugins/fileupload/js/vendor/canvas-to-blob.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.iframe-transport.js', dest: 'src/plugins/fileupload/js/vendor/jquery.iframe-transport.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.fileupload.js', dest: 'src/plugins/fileupload/js/jquery.fileupload.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.fileupload-process.js', dest: 'src/plugins/fileupload/js/jquery.fileupload-process.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.fileupload-image.js', dest: 'src/plugins/fileupload/js/jquery.fileupload-image.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.fileupload-audio.js', dest: 'src/plugins/fileupload/js/jquery.fileupload-audio.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.fileupload-video.js', dest: 'src/plugins/fileupload/js/jquery.fileupload-video.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.fileupload-validate.js', dest: 'src/plugins/fileupload/js/jquery.fileupload-validate.js' },
                { src: 'bower_components/blueimp-file-upload/js/jquery.fileupload-ui.js', dest: 'src/plugins/fileupload/js/jquery.fileupload-ui.js' },
            
                // flot chart
                { src: '*.js', dest: 'src/plugins/flot/js', cwd: 'bower_components/flot', expand : true },
                { src: 'bower_components/flot.tooltip/js/jquery.flot.tooltip.js', dest: 'src/plugins/flot/js/jquery.flot.tooltip.js' },
                { src: 'bower_components/flot-spline/js/jquery.flot.spline.js', dest: 'src/plugins/flot/js/jquery.flot.spline.js' },

                // fullcalendar
                { src: '*.js', cwd: 'bower_components/fullcalendar/dist/lang', dest: 'src/plugins/fullcalendar/js/lang', expand : true },
                { src: 'bower_components/fullcalendar/dist/fullcalendar.css', dest: 'src/plugins/fullcalendar/css/fullcalendar-main.css' },
                { src: 'bower_components/fullcalendar/dist/fullcalendar.js', dest: 'src/plugins/fullcalendar/js/fullcalendar.js' },

                // google maps
                { src: 'bower_components/gmaps/gmaps.js', dest: 'src/plugins/gmaps/js/gmaps.js' },

                // gritter
                { src: 'bower_components/jquery.gritter/js/jquery.gritter.js', dest: 'src/plugins/gritter/js/jquery.gritter.js' },

                // Jcrop
                { src: 'bower_components/Jcrop/js/jquery.Jcrop.js', dest: 'src/plugins/jcrop/js/jquery.Jcrop.js' },

                // jQuery UI
                { src: 'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.js', dest: 'src/plugins/jquery-ui/js/jquery-ui-touch.js' },
                { src: 'bower_components/jquery-ui/jquery-ui.js', dest: 'src/plugins/jquery-ui/js/jquery-ui.js' },
                { src: 'bower_components/jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon.js', dest: 'src/plugins/jquery-ui/js/addon/timepicker/jquery-ui-timepicker.js' },
                { src: '*.js', dest: 'src/plugins/jquery-ui/js/addon/timepicker/i18n', cwd: 'bower_components/jqueryui-timepicker-addon/dist/i18n', expand : true },
            
                // Jqvmap
                { src: 'bower_components/jqvmap/jqvmap/jquery.vmap.js', dest: 'src/plugins/jqvmap/js/jquery.vmap.js' },
                { src: '**', dest: 'src/plugins/jqvmap/js/data', cwd: 'bower_components/jqvmap/jqvmap/data', expand : true },
                { src: '**', dest: 'src/plugins/jqvmap/js/maps', cwd: 'bower_components/jqvmap/jqvmap/maps', expand : true },

                // ladda
                { src: 'bower_components/ladda/js/ladda.js', dest: 'src/plugins/ladda/js/ladda.js' },
                { src: 'bower_components/spin.js/spin.js', dest: 'src/plugins/ladda/js/vendor/spin.js' },

                // magnific
                { src: 'bower_components/magnific-popup/dist/jquery.magnific-popup.js', dest: 'src/plugins/magnific/js/jquery.magnific-popup.js' },
                
                // modernizr
                { src: 'bower_components/modernizr/modernizr.js', dest: 'src/plugins/modernizr/js/modernizr.js' },

                // owl carousel
                { src: 'bower_components/owl-carousel/owl-carousel/owl.carousel.js', dest: 'src/plugins/owl/js/owl.carousel.js' },

                // parsley
                { src: 'bower_components/parsleyjs/dist/parsley.js', dest: 'src/plugins/parsley/js/parsley.js' },

                // prettify
                { src: 'bower_components/parsleyjs/dist/parsley.js', dest: 'src/plugins/parsley/js/parsley.js' },

                // response
                { src: 'bower_components/responsejs/response.js', dest: 'src/plugins/responsejs/js/response.js' },

                // select2
                { src: '*.js', dest: 'src/plugins/select2/js', cwd: 'bower_components/select2', expand : true },

                // selectize
                { src: 'bower_components/selectize/dist/js/standalone/selectize.js', dest: 'src/plugins/selectize/js/selectize.js' },

                // shuffle
                { src: 'bower_components/shufflejs/dist/jquery.shuffle.js', dest: 'src/plugins/shuffle/js/jquery.shuffle.js' },

                // stellar
                { src: 'bower_components/stellar/jquery.stellar.js', dest: 'src/plugins/stellar/js/jquery.stellar.js' },

                // summernote
                { src: 'bower_components/summernote/dist/summernote.js', dest: 'src/plugins/summernote/js/summernote.js' },

                // touchspin
                { src: 'bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js', dest: 'src/plugins/touchspin/js/jquery.bootstrap-touchspin.js' },

                // xeditable
                { src: '**', dest: 'src/plugins/xeditable/inputs-ext', cwd: 'bower_components/x-editable/dist/inputs-ext', expand : true },
                { src: 'bower_components/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js', dest: 'src/plugins/xeditable/js/bootstrap-editable.js' }
            ]
        }
    };
};