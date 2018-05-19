(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Norwegian
window.no_localization = AU.language.no = {
    "addFilesProgressDialog": {
        "text": "Legger til filer i listen for opplasting...",
		"waitText": "Det kan ta en stund. Vent litt..."
    },
    "commonDialog": {
        "cancelButtonText": "Avbryt",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "Avbryt",
        "saveButtonText": "Lagre"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Klikk for å lukke"
    },
    "messages": {
        "cmykImagesNotAllowed": "CMYK-bilder er ikke tillatt.",        
        "cannotReadFile": "Klarer ikke å lese filen: {0}.",
        "dimensionsTooLarge": "Størrelsen av \"{0}\" er for stor, filen ble ikke addert. Maksimal tillatt bildestørrelse er {1} x {2} piksler.",
        "dimensionsTooSmall": "Størrelsen av \"{0}\" er for liten, filen ble ikke addert. Minimal tillatt bildestørrelse er {1} x {2} piksler.",
        "fileNameNotAllowed": "Filen {0} kan ikke velges. Filen har et ugyldig navn.",
		"fileSizeTooSmall": "Størrelsen av \"{0}\" er for liten til at den kan legges til. Minimum tillatt størrelse er {1}.",
        "filesNotAdded": "{0} filer ble ikke lagt til, på grunn av begrensninger i nettstedet.",
        "maxFileCountExceeded": "Alle filene ble ikke lagt til. De har tillatt å laste opp inntil {0} fil(er).",
        "maxFileSizeExceeded": "Størrelsen av \"{0}\" er for stor til at den kan legges til. Maksimal tillatt størrelse er {1}.",
        "maxTotalFileSizeExceeded": "Alle filene ble ikke lagt til. Maksimal tillatt filstørrelse ({0}) ble overskredet.",
        "previewNotAvailable": "Forhåndsvisning er ikke tilgjengelig.",
        "tooFewFiles": "Minst {0} burde velges for å starte opplasting."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Rediger beskrivelse",
        "imageTooltip": "{0}\n{1}, {3}, \nEndret: {2}",
        "itemTooltip": "{0}\n{1}, \nEndret: {2}",
        "removalIconTooltip": "Fjern",
        "rotationIconTooltip": "Roter"
    },
    "statusPane": {
        "dataUploadedText": "Data lastet opp: {0} / {1}",
        "filesPreparedText": "Forberedte filer: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">Total files:</font> {0}",
        "filesUploadedText": "Ferdige filer: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">Ingen filer til opplasting</font>",
        "preparingText": "FORBEREDER...",
        "sendingText": "LASTER OPP..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Legg til flere filer",
        "addFolderHyperlinkText": "Legg til mappe",
        "clearAllHyperlinkText": "fjern samtlige filer",
        "orText": "eller",
        "titleText": "Filer til opplastning",
        "viewComboBox": ["Fliser", "Miniatyrbilder", "Ikoner"],
        "viewComboBoxText": "Bytt visning:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Skjul detaljer",
        "message": "Alle filene ble ikke lastet opp feilfritt. Ta kontakt med Deres nettadministrator, om De ser denne beskjeden.",
        "showDetailsButtonText": "Vis detaljer",
        "title": "Feil i opplastingen "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Legg til flere filer",
		"addFolderButtonText": "+ Legg til mappe",
        "dropFilesHereText": "Slipp filer her…"		
    },
    "cancelUploadButtonText": "Avbryt",
    "uploadButtonText": "Last opp"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);