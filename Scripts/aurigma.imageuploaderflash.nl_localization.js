(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Dutch
window.nl_localization = AU.language.nl = {
    "addFilesProgressDialog": {
        "text": "Bezig met toevoegen van bestanden aan uploadlijst...",
		"waitText": "Een ogenblik geduld. Dit kan even duren..."
    },
    "commonDialog": {
        "cancelButtonText": "Annuleren",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "Annuleren",
        "saveButtonText": "Opslaan"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Klik hier om te sluiten"
    },
    "messages": {
        "cmykImagesNotAllowed": "CMYK-afbeeldingen zijn niet toegestaan.",
        "cannotReadFile": "Kan bestand {0} niet lezen.",
        "dimensionsTooLarge": "\"{0}\" is te groot, het bestand is niet toegevoegd. De maximaal toegestane afmeting voor afbeeldingen is {1} x {2} pixels.",
        "dimensionsTooSmall": "\"{0}\" is te klein, het bestand is niet toegevoegd. De minimaal toegestane afmeting voor afbeeldingen is {1} x {2} pixels.",
        "fileNameNotAllowed": "Het bestand \"{0}\" kan niet worden geselecteerd. De naam van dit bestand is niet toegestaan.",
		"fileSizeTooSmall": "\"{0}\" is te klein om toe te voegen. Minimaal toegestane grootte is {1}.",
        "filesNotAdded": "{0} bestanden zijn niet toegevoegd vanwege restricties van de website.",
        "maxFileCountExceeded": "Niet alle bestanden zijn toegevoegd. U mag niet meer dan {0} bestand(en) uploaden.",
        "maxFileSizeExceeded": "\"{0}\" is te groot om toe te voegen. Maximaal toegestane grootte is {1}.",
        "maxTotalFileSizeExceeded": "Niet alle bestanden zijn toegevoegd. De maximale totale bestandsgrootte ({0}) is overschreden.",
        "previewNotAvailable": "Voorbeeld niet beschikbaar",
        "tooFewFiles": "Selecteer minimaal {0} bestanden om te beginnen met uploaden."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Omschrijving bewerken",
        "imageTooltip": "{0}\n{1}, {3}, \nGewijzigd: {2}",
        "itemTooltip": "{0}\n{1}, \nGewijzigd: {2}",
        "removalIconTooltip": "Verwijderen",
        "rotationIconTooltip": "Draaien"
    },
    "statusPane": {
        "dataUploadedText": "Geüploade gegevens: {0} / {1}",
        "filesPreparedText": "Voorbereide bestanden: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">Totaal aantal bestanden:</font> {0}",
        "filesUploadedText": "Voltooide bestanden: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">Geen bestanden om te uploaden</font>",
        "preparingText": "BEZIG MET VOORBEREIDEN...",
        "sendingText": "BEZIG MET UPLOADEN..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Meer bestanden toevoegen",
		"addFolderHyperlinkText": "Map toevoegen",
        "clearAllHyperlinkText": "Alle bestanden verwijderen",
        "orText": "of",
        "titleText": "Bestanden om te uploaden",
        "viewComboBox": ["Tegels", "Miniaturen", "Pictogrammen"],
        "viewComboBoxText": "Weergave veranderen:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Details verbergen",
        "message": "Niet alle bestanden zijn geüpload. Als dit bericht wordt weergegeven, neem dan contact op met de webmaster.",
        "showDetailsButtonText": "Details weergeven",
        "title": "Fout bij uploaden "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Meer bestanden toevoegen",
		"addFolderButtonText": "+ Map toevoegen",
        "dropFilesHereText": "Bestanden hier neerzetten..."		
    },
    "cancelUploadButtonText": "Annuleren",
    "uploadButtonText": "Uploaden"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);