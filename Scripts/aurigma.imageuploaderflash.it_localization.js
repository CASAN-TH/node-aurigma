(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Italian
window.it_localization = AU.language.it = {
    "addFilesProgressDialog": {
        "text": "Aggiunta fila a elenco caricamento in corso...",
		"waitText": "Attendere qualche istante..."
    },
    "commonDialog": {
        "cancelButtonText": "Annulla",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "Annulla",
        "saveButtonText": "Salva"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Fare clic per chiudere"
    },
    "messages": {
        "cmykImagesNotAllowed": "Immagini CMYK non consentite.",        
        "cannotReadFile": "Impossibile leggere il file: {0}.",
        "dimensionsTooLarge": "Dimensioni di \"{0}\" eccessive. Il file non è stato aggiunto. Le dimensioni massime consentite delle immagini sono di {1} x {2} pixel.",
        "dimensionsTooSmall": "Dimensioni di \"{0}\" troppo ridotte. Il file non è stato aggiunto. Le dimensioni minime consentite delle immagini sono di {1} x {2} pixel.",
        "fileNameNotAllowed": "Il file \"{0}\" non può essere selezionato. Questo file ha un nome inammissibile.",
		"fileSizeTooSmall": "Le dimensioni di \"{0}\" sono troppo ridotte per essere aggiunte. Le dimensioni minime consentite sono di {1}.",
        "filesNotAdded": "{0} file non sono stati aggiunti a causa delle limitazioni del sito.",
        "maxFileCountExceeded": "Non tutti i file sono stati aggiunti. È consentito caricare non più di {0} file.",
        "maxFileSizeExceeded": "Le dimensioni di \"{0}\" sono troppo grandi per essere aggiunte. Le dimensioni massime consentite sono di {1}.",
        "maxTotalFileSizeExceeded": "Non tutti i file sono stati aggiunti. Sono state superare le dimensioni totali massime del file ({0}).",
        "previewNotAvailable": "Anteprima non disponibile",
        "tooFewFiles": "Per avviare il caricamento è necessario selezionare almeno {0} file."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Modifica descrizione",
        "imageTooltip": "{0}\n{1}, {3}, \nModificati: {2}",
        "itemTooltip": "{0}\n{1}, \nModificati: {2}",
        "removalIconTooltip": "Rimuovi",
        "rotationIconTooltip": "Ruota"
    },
    "statusPane": {
        "dataUploadedText": "Dati caricati: {0} / {1}",
        "filesPreparedText": "File preparati: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">File totali:</font> {0}",
        "filesUploadedText": "File completati: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">Nessun file da caricare</font>",
        "preparingText": "PREPARAZIONE IN CORSO...",
        "sendingText": "CARICAMENTO IN CORSO..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Aggiungi altri file",
		"addFilesHyperlinkText": "aggiungi cartella",
        "clearAllHyperlinkText": "Rimuovi tutti i file",
        "orText": "oppure",
        "titleText": "File da caricare",
        "viewComboBox": ["Riquadri", "Miniature", "Icone"],
        "viewComboBoxText": "Cambia vista:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Nascondi dettagli",
        "message": "Non tutti i file sono stati caricati con successo. Se viene visualizzato questo messaggio, contattare il Web master.",
        "showDetailsButtonText": "Mostra dettagli",
        "title": "Errore di caricamento "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Aggiungi altri file",
		"addFolderButtonText": "+ Aggiungi cartella",
        "dropFilesHereText": "Rilascia file qui…"		
    },
    "cancelUploadButtonText": "Annulla",
    "uploadButtonText": "Carica"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);