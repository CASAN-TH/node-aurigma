(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// English
window.en_localization = AU.language.en = {
    addFilesProgressDialog: {
        text: "Adding files to upload list...",
		waitText: "Please wait, it may take some time..."
    },
    commonDialog: {
        cancelButtonText: "Cancel",
        okButtonText: "OK"
    },
    descriptionEditor: {
        cancelButtonText: "Cancel",
        saveButtonText: "Save"
    },
    imagePreviewWindow: {
        closePreviewTooltip: "Click to close"
    },
    messages: {
        cmykImagesNotAllowed: "CMYK images are not allowed.",
        cannotReadFile: "Cannot read file: {0}.",
        dimensionsTooLarge: "Dimensions of '{0}' are too large, the file wasn't added. Maximum allowed image dimensions are {1}x{2} pixels.",
        dimensionsTooSmall: "Dimensions of '{0}' are too small, the file wasn't added. Minimum allowed image dimensions are {1}x{2} pixels.",
        fileNameNotAllowed: "The file '{0}' cannot be added. The website doesn't accept files of this type.",
		fileSizeTooSmall: "Size of '{0}' is too small to be added. Minimum allowed size is {1}.",
        filesNotAdded: "{0} files were not added due to restrictions of the site.",
        maxFileCountExceeded: "Not all files were added. You are allowed to upload no more than {0} file(s).",
        maxFileSizeExceeded: "Size of '{0}' is too large to be added. Maximum allowed size is {1}.",
        maxTotalFileSizeExceeded: "Not all files were added. Maximum total file size ({0}) was exceeded.",
        previewNotAvailable: "Preview is not available",
		dndFolderFileLimitExceeded: "Some files might be skipped in {0}. Chrome sees only first 100 files per folder. Add the folder with a button instead of drag-and-drop.",
        tooFewFiles: "At least {0} files should be selected to start upload."
    },
    paneItem: {
        descriptionEditorIconTooltip: "Edit description",
        imageTooltip: "{0}\n{1}, {3}, \nModified: {2}",
        itemTooltip: "{0}\n{1}, \nModified: {2}",
        removalIconTooltip: "Remove",
        rotationIconTooltip: "Rotate"
    },
    statusPane: {
        dataUploadedText: "Data uploaded: {0} / {1}",
        filesPreparedText: "Files prepared: {0} / {1}",
        filesToUploadText: '<font color=\"#7a7a7a\">Total files:</font> {0}',
        filesUploadedText: "Files complete: {0} / {1}",
        noFilesToUploadText: 'No files to upload',
        preparingText: "PREPARING...",
        sendingText: "UPLOADING..."
    },
    topPane: {
        addFilesHyperlinkText: "Add more files",
        addFolderHyperlinkText: "add folder",
        clearAllHyperlinkText: 'remove all files',
        orText: "or",
        titleText: "Files for upload",
        viewComboBox: ["Tiles", "Thumbnails", "Icons"],
        viewComboBoxText: "Change view:"
    },
    uploadErrorDialog: {
        hideDetailsButtonText: "Hide Details",
        message: "Not all files were uploaded successfully. If you see this message, contact web master.",
        showDetailsButtonText: "Show Details",
        title: "Upload Error"
    },
    uploadPane: {
        addFilesButtonText: "+ Add more files",
        addFolderButtonText: "+ Add folder",
        dropFilesHereText: "Drop files here..."		
    },
    cancelUploadButtonText: "Cancel",
    uploadButtonText: "Upload"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);