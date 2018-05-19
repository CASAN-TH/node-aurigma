(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Spanish
window.es_localization = AU.language.es = {
    "addFilesProgressDialog": {
        "text": "Incorporando archivos a lista de carga...",
		"waitText": "Espere unos momentos mientras termina el proceso..."
    },
    "commonDialog": {
        "cancelButtonText": "Cancelar",
        "okButtonText": "ACEPTAR"
    },
    "descriptionEditor": {
        "cancelButtonText": "Cancelar",
        "saveButtonText": "Guardar"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "Hacer clic para cerrar"
    },
    "messages": {
        "cmykImagesNotAllowed": "No se permiten las imágenes CMYK.",        
        "cannotReadFile": "No se puede leer el archivo: {0}.",
        "dimensionsTooLarge": "Las dimensiones de “{0}” son demasiado grandes; no se ha agregado el archivo. Las dimensiones máximas permitidas de imágenes son {1} x {2} píxeles.",
        "dimensionsTooSmall": "Las dimensiones de “{0}” son demasiado pequeñas; no se ha agregado el archivo. Las dimensiones mínimas permitidas de imágenes son {1} x {2} píxeles.",
        "fileNameNotAllowed": "El archivo “{0}” no se puede eliminar. El nombre de este archivo no es válido.",
		"fileSizeTooSmall": "El tamaño de “{0}” es demasiado pequeño para agregarlo. El tamaño mínimo permitido es {1}.",
        "filesNotAdded": "No se han agregado {0} archivos debido a restricciones del sitio.",
        "maxFileCountExceeded": "No se han agregado todos los archivos. No se puede cargar más de {0} archivo(s).",
        "maxFileSizeExceeded": "El tamaño de “{0}” es demasiado grande para agregarlo. El tamaño máximo permitido es {1}.",
        "maxTotalFileSizeExceeded": "No se han agregado todos los archivos. Se ha superado el tamaño máximo total de archivos ({0}).",
        "previewNotAvailable": "Vista previa no disponible",
        "tooFewFiles": "Debe seleccionar al menos {0} archivos para comenzar la carga."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "Editar descripción",
        "imageTooltip": "{0}\n{1}, {3}, \nModificado: {2}",
        "itemTooltip": "{0}\n{1}, \nModificado: {2}",
        "removalIconTooltip": "Eliminar",
        "rotationIconTooltip": "Girar"
    },
    "statusPane": {
        "dataUploadedText": "Datos actualizados: {0}/{1}",
        "filesPreparedText": "Archivos preparados: {0}/{1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">Total de archivos:</font> {0}",
        "filesUploadedText": "Archivos completados: {0}/{1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">No hay archivos para cargar</font>",
        "preparingText": "PREPARANDO...",
        "sendingText": "CARGANDO..."
    },
    "topPane": {
        "addFilesHyperlinkText": "Agregar más archivos",
        "addFolderHyperlinkText": "agregar carpeta",
        "clearAllHyperlinkText": "eliminar todos los archivos",
        "orText": "O bien",
        "titleText": "Archivos para cargar",
        "viewComboBox": ["Mosaicos", "Miniaturas", "Iconos"],
        "viewComboBoxText": "Cambiar vista:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "Ocultar detalles",
        "message": "No se han cargado correctamente todos los archivos. Si ve este mensaje, contacte con el administrador del sitio web.",
        "showDetailsButtonText": "Mostrar detalles",
        "title": "Error de carga "
    },
    "uploadPane": {
        "addFilesButtonText": "+ Agregar más archivos",
        "addFolderButtonText": "+ Agregar carpeta",
        "dropFilesHereText": "Soltar archivos aquí…"		
    },
    "cancelUploadButtonText": "Cancelar",
    "uploadButtonText": "Cargar"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);