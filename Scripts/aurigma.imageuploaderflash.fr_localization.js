(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// French
window.fr_localization = AU.language.fr = {
    "addFilesProgressDialog": {
        "text": "Ajout de fichiers à la liste de chargement...",
		"waitText": "Veuillez patienter, cette opération peut prendre un certain temps..."
   },
    "commonDialog": {
        "cancelButtonText": "Annuler",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "Annuler",
        "saveButtonText": "Enregistrer"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Cliquez pour fermer"
    },
    "messages": {
        "cmykImagesNotAllowed": "Les images CMYK ne sont pas autorisées.",        
        "cannotReadFile": "Impossible de lire le fichier : {0}.",
        "dimensionsTooLarge": "Les dimensions de « {0} » sont trop importantes. Le fichier n’a pas été ajouté. Les dimensions maximales autorisées pour l’image sont de {1} x {2} pixels.",
        "dimensionsTooSmall": "Les dimensions de « {0} » sont trop petites. Le fichier n’a pas été ajouté. Les dimensions minimales autorisées pour l’image sont de {1} x {2} pixels.",
        "fileNameNotAllowed": "Impossible de sélectionner le fichier « {0} ». Ce fichier porte un nom qui ne peut pas être autorisé.",
		"fileSizeTooSmall": "Le fichier « {0} » est de trop petite taille pour pouvoir être ajouté. La taille minimale autorisée est de {1}.",
        "filesNotAdded": "{0} fichiers n’ont pas été ajoutés en raison des restrictions du site.",
        "maxFileCountExceeded": "Tous les fichiers n’ont pas été ajoutés. Vous avez autorisé à charger {0} fichier(s) au maximum.",
        "maxFileSizeExceeded": "Le fichier « {0} » est de trop grande taille pour pouvoir être ajouté. La taille maximale autorisée est de {1}.",
        "maxTotalFileSizeExceeded": "Tous les fichiers n’ont pas été ajoutés. La taille totale maximale des fichiers ({0}) a été dépassée.",
        "previewNotAvailable": "L’aperçu n’est pas disponible.",
        "tooFewFiles": "{0} fichiers doivent au minimum être sélectionnés pour lancer le chargement."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Modifier la description",
        "imageTooltip": "{0}\n{1}, {3}, \nModifié le : {2}",
        "itemTooltip": "{0}\n{1}, \nModifié le : {2}",
        "removalIconTooltip": "Supprimer",
        "rotationIconTooltip": "Rotation"
    },
    "statusPane": {
        "dataUploadedText": "Données chargées : {0} / {1}",
        "filesPreparedText": "Fichiers préparés : {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">Total des fichiers :</font> {0}",
        "filesUploadedText": "Fichiers terminés : {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">Aucun fichier à charger</font>",
        "preparingText": "PRÉPARATION...",
        "sendingText": "CHARGEMENT..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Ajouter d’autres fichiers",
	    "addFolderHyperlinkText": "ajouter un dossier",	
        "clearAllHyperlinkText": "supprimer tous les fichiers",
        "orText": "ou",
        "titleText": "Fichiers à charger",
        "viewComboBox": ["Mosaïques", "Vignettes", "Icônes"],
        "viewComboBoxText": "Changer l’affichage :"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Masquer les détails",
        "message": "Tous les fichiers n’ont pas été correctement chargés. Si ce message s’affiche, contactez le webmestre.",
        "showDetailsButtonText": "Afficher les détails",
        "title": "Erreur de chargement "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Ajouter d’autres fichiers",
        "addFolderButtonText": "+ Ajouter un dossier",
        "dropFilesHereText": "Déposer les fichiers ici..."		
    },
    "cancelUploadButtonText": "Annuler",
    "uploadButtonText": "Charger"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);