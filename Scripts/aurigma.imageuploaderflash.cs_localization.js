(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Czech
window.cs_localization = AU.language.cs = {
    "addFilesProgressDialog": {
        "text": "Přidání souborů k seznamu k načtení...",
		"waitText": "Prosíme čekejte, operace může chvíli trvat..."
    },
    "commonDialog": {
        "cancelButtonText": "Zrušit",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "Zrušit",
        "saveButtonText": "Uložit"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Zavřete klepnutím"
    },
    "messages": {
        "cmykImagesNotAllowed": "CMYK snímky nejsou povoleny.",
        "cannotReadFile": "Nelze přečíst soubor: {0}.",
        "dimensionsTooLarge": "Rozměry „{0}“ jsou příliš veliké, soubor proto nemohl být přidán. Maximální povolené rozměry obrázku jsou {1} x {2} pixelů.",
        "dimensionsTooSmall": "Rozměry „{0}“ jsou příliš malé, soubor proto nemohl být přidán. Minimální povolené rozměry obrázku jsou {1} x {2} pixelů.",
		"fileNameNotAllowed": "Soubor „{0}“ nelze zvolit. Tento soubor má nepřípustný název.",
		"fileSizeTooSmall": "Velikost „{0}“ je příliš malá na to, aby mohl být soubor přidán. Minimální povolená velikost je {1}.",
        "filesNotAdded": "{0} soubory nebyly přidány vzhledem k omezením webových stránek.",
        "maxFileCountExceeded": "Nepodařilo se přidat všechny soubory. Nesmíte načíst více než {0} souborů.",
        "maxFileSizeExceeded": "Velikost „{0}“ je příliš velká na to, aby mohl být soubor přidán. Maximální povolená velikost je {1}.",
        "maxTotalFileSizeExceeded": "Nepodařilo se přidat všechny soubory. Byla překročena maximální celková velikost souborů ({0}).",
        "previewNotAvailable": "Funkce náhledu není k dispozici",
        "tooFewFiles": "Pro zahájení načítání byste měli vybrat alespoň {0} souborů."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Upravit popis",
        "imageTooltip": "{0}\n{1}, {3}, \nUpraveno: {2}",
        "itemTooltip": "{0}\n{1}, \nUpraveno: {2}",
        "removalIconTooltip": "Odstranit",
        "rotationIconTooltip": "Otočit"
    },
    "statusPane": {
        "dataUploadedText": "Data načtena: {0} / {1}",
        "filesPreparedText": "Soubory připraveny: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">Celkem souborů:</font> {0}",
        "filesUploadedText": "Dokončené soubory: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">Žádné soubory k načtení</font>",
        "preparingText": "PŘÍPRAVA...",
        "sendingText": "NAČÍTÁNÍ..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Přidat více souborů",
        "addFolderHyperlinkText": "přidat složku",
        "clearAllHyperlinkText": "odstranit všechny soubory",
        "orText": "nebo",
        "titleText": "Soubory k načtení",
        "viewComboBox": ["Tapety", "Miniatury", "Ikony"],
        "viewComboBoxText": "Změnit zobrazení:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Schovat detaily",
        "message": "Nepodařilo se úspěšně načíst všechny soubory. Pokud se vám zobrazí toto hlášení, obraťte se na správce webu.",
        "showDetailsButtonText": "Zobrazit podrobnosti",
        "title": "Chyba načítání "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Přidat další soubory",
		"addFolderButtonText": "+ Přidat složku",
        "dropFilesHereText": "Přetáhnout soubory sem..."		
    },
    "cancelUploadButtonText": "Zrušit",
    "uploadButtonText": "Načíst"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);