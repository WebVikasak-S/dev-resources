const htmlFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(html)$/)) {
        req.fileValidationError = 'Only HTML files are allowed!';
        return cb(new Error('Only HTML files are allowed!'), false);
    }
    cb(null, true);
};
exports.htmlFilter = htmlFilter;