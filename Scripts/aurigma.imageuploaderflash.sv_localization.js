(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Swedish
window.sv_localization = AU.language.sv = {
    "addFilesProgressDialog": {
        "text": "Lägger till filer i uppladdningslistan...",
		"waitText": "Vänta lite..."
    },
    "commonDialog": {
        "cancelButtonText": "Avbryt",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "Avbryt",
        "saveButtonText": "Spara"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Klicka för att stänga"
    },
    "messages": {
        "cmykImagesNotAllowed": "CMYK-bilder tillåts inte.",        
        "cannotReadFile": "Det går inte att läsa filen: {0}.",
        "dimensionsTooLarge": "{0} har för stora dimensioner. Filen har inte lagts till. Bildernas dimensioner får vara maximalt {1} x {2} bildpunkter.",
        "dimensionsTooSmall": "{0} har för små dimensioner. Filen har inte lagts till. Bildernas dimensioner måste vara minst {1} x {2} bildpunkter.",
        "fileNameNotAllowed": "Filen ”{0}” kan inte väljas. Den här filen har ett otillåtet namn.",
		"fileSizeTooSmall": "{0} är för liten för att läggas till. Minsta tillåtna storlek är {1}.",
        "filesNotAdded": "{0} filer lades inte till på grund av webbplatsens begränsningar.",
        "maxFileCountExceeded": "Alla filer har inte lagts till. Du får inte ladda upp fler än {0} fil(er).",
        "maxFileSizeExceeded": "{0} är för stor för att läggas till. Största tillåtna storlek är {1}.",
        "maxTotalFileSizeExceeded": "Alla filer har inte lagts till. Största sammanlagda filstorlek ({0}) har överskridits.",
        "previewNotAvailable": "Förhandsgranskning är inte tillgängligt",
        "tooFewFiles": "Minst {0} filer måste väljas för att uppladdningen ska starta."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Redigera beskrivning",
        "imageTooltip": "{0}\n{1}, {3}, \nModifierad: {2}",
        "itemTooltip": "{0}\n{1}, \nModifierad: {2}",
        "removalIconTooltip": "Ta bort",
        "rotationIconTooltip": "Rotera"
    },
    "statusPane": {
        "dataUploadedText": "Överförda data: {0} / {1}",
        "filesPreparedText": "Förberedda filer: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">Totalt antal filer:</font> {0}",
        "filesUploadedText": "Klara filer: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">Inga filer att ladda upp</font>",
        "preparingText": "FÖRBEREDER...",
        "sendingText": "LADDAR UPP..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Lägg till fler filer",
        "addFolderHyperlinkText": "Lägg till mapp",
        "clearAllHyperlinkText": "ta bort alla filer",
        "orText": "eller",
        "titleText": "Filer att ladda upp",
        "viewComboBox": ["Sida vid sida", "Miniatyrer", "Ikoner"],
        "viewComboBoxText": "Ändra vy:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Dölj information",
        "message": "Alla filer kunde inte laddas upp. Om du ser detta meddelande ska du kontakta webbmaster.",
        "showDetailsButtonText": "Visa information",
        "title": "Uppladdningsfel "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Lägg till fler filer",
		"addFolderButtonText": "+ Lägg till mapp",
        "dropFilesHereText": "Släpp filer här…"		
    },
    "cancelUploadButtonText": "Avbryt",
    "uploadButtonText": "Ladda upp"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);