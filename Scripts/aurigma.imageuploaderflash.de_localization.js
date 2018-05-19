(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// German
window.de_localization = AU.language.de = {
    "addFilesProgressDialog": {
        "text": "Dateien werden der Upload-Liste hinzugefügt...",
		"waitText": "Bitte warten, es kann eine Weile dauern..."
    },
    "commonDialog": {
        "cancelButtonText": "Abbrechen",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "Abbrechen",
        "saveButtonText": "Speichern"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Zum Schließen bitte klicken"
    },
    "messages": {
        "cmykImagesNotAllowed": "CMYK-Bilder sind nicht zulässig.",
        "cannotReadFile": "Folgende Datei kann nicht gelesen werden: {0}.",
        "dimensionsTooLarge": "Die Maße von „{0}“ sind zu groß, die Datei wurde nicht hinzugefügt. Die maximal zulässigen Bildmaße betragen {1} x {2} Pixel.",
        "dimensionsTooSmall": "Die Maße von „{0}“ sind zu klein, die Datei wurde nicht hinzugefügt. Die minimal zulässigen Bildmaße betragen {1} x {2} Pixel.",
        "fileNameNotAllowed": "Die Datei „{0}“ kann nicht ausgewählt werden. Die Datei hat einen unzulässigen Namen.",
		"fileSizeTooSmall": "„{0}“ ist zu klein, um hinzugefügt zu werden. Die minimale Größe beträgt {1}.",
        "filesNotAdded": "{0} wurden aufgrund von Beschränkungen der Site nicht hinzugefügt.",
        "maxFileCountExceeded": "Nicht alle Dateien wurden hinzugefügt. Sie dürfen höchstens {0} Datei(en) hochladen.",
        "maxFileSizeExceeded": "„{0}“ ist zu groß, um hinzugefügt zu werden. Die maximale Größe beträgt {1}.",
        "maxTotalFileSizeExceeded": "Nicht alle Dateien wurden hinzugefügt. Die maximale Gesamtgröße der Datei ({0}) wurde überschritten.",
        "previewNotAvailable": "Vorschau ist nicht verfügbar",
        "tooFewFiles": "Mindestens {0} Dateien müssen ausgewählt sein, um mit dem Hochladen beginnen zu können."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Beschreibung bearbeiten",
        "imageTooltip": "{0}\n{1}, {3}, \nGeändert: {2}",
        "itemTooltip": "{0}\n{1}, \nGeändert: {2}",
        "removalIconTooltip": "Entfernen",
        "rotationIconTooltip": "Drehen"
    },
    "statusPane": {
        "dataUploadedText": "Hochgeladene Daten: {0} / {1}",
        "filesPreparedText": "Vorbereitete Dateien: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">Dateien insgesamt:</font> {0}",
        "filesUploadedText": "Abgeschlossene Dateien: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">Keine Dateien zum Hochladen</font>",
        "preparingText": "VORGANG WIRD VORBEREITET...",
        "sendingText": "UPLOAD WIRD DURCHGEFÜHRT..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Weitere Dateien hinzufügen",
		"addFolderHyperlinkText": "ordner hinzufügen",
        "clearAllHyperlinkText": "Alle Dateien entfernen",
        "orText": "oder",
        "titleText": "Dateien zum Hochladen",
        "viewComboBox": ["Kacheln", "Miniaturansichten", "Symbole"],
        "viewComboBoxText": "Ansicht ändern:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Details ausblenden",
        "message": "Nicht alle Dateien wurden erfolgreich hochgeladen. Wenn diese Meldung erscheint, wenden Sie sich an den Webmaster.",
        "showDetailsButtonText": "Details einblenden",
        "title": "Fehler beim Hochladen "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Weitere Dateien hinzufügen",
		"addFolderButtonText": "+ Ordner hinzufügen",
		"dropFilesHereText": "Dateien hier ablegen…"		
    },
    "cancelUploadButtonText": "Abbrechen",
    "uploadButtonText": "Hochladen"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);