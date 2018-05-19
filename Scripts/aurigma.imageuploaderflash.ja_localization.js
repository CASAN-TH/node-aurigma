(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Japanese
window.ja_localization = AU.language.ja = {
    "addFilesProgressDialog": {
        "text": "ファイルをアップロードリストに追加中...",
		"waitText": "しばらくお待ちください。"
    },
    "commonDialog": {
        "cancelButtonText": "キャンセル",
        "okButtonText": "OK"
    },
    "descriptionEditor": {
        "cancelButtonText": "キャンセル",
        "saveButtonText": "保存"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "クリックして閉じる"
    },
    "messages": {
        "cmykImagesNotAllowed": "CMYK 画像は許可されません。",        
        "cannotReadFile": "ファイルを読めません: {0}。",
        "dimensionsTooLarge": "「{0}」 の寸法が大きすぎるため、ファイルを追加できませんでした。 画像の最大寸法は {1}x{2} ピクセルです。",
        "dimensionsTooSmall": "「{0}」 の寸法が小さすぎるため、ファイルを追加できませんでした。 画像の最小寸法は {1}x{2} ピクセルです。",
        "fileNameNotAllowed": "ファイル「{0}」は選択できません。 このファイル名は許可されません。",
		"fileSizeTooSmall": "「{0}」 は、サイズが小さすぎて追加できません。 最小サイズは {1}です。",
        "filesNotAdded": "サイト制限のため、{0} ファイルは追加できませんでした。",
        "maxFileCountExceeded": "ファイルすべては追加できませんでした。 アップロードできる最大ファイル数は {0} つです。",
        "maxFileSizeExceeded": "「{0}」 はサイズが大きすぎて追加できません。 最大サイズは {1}です。",
        "maxTotalFileSizeExceeded": "ファイルすべては追加できませんでした。 ファイルの合計サイズ({0}) の上限を超えました。",
        "previewNotAvailable": "プレビューはご利用になれません",
        "tooFewFiles": "アップロードを開始するには、最低でも {0} つのファイルを選択する必要があります。"
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "説明の編集",
        "imageTooltip": "{0}\n{1}、 {3}、 \n修正済み: {2}",
        "itemTooltip": "{0}\n{1}、 \n修正済み: {2}",
        "removalIconTooltip": "削除",
        "rotationIconTooltip": "回転"
    },
    "statusPane": {
        "dataUploadedText": "アップロード済みデータ: {0} / {1}",
        "filesPreparedText": "準備済みのファイル: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">合計ファイル:</font> {0}",
        "filesUploadedText": "完了済みのファイル: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">アップロードするファイルはありません</font>",
        "preparingText": "準備中...",
        "sendingText": "アップロード中..."
    },
    "topPane": {
        "addFilesHyperlinkText": "ファイルを追加する",
		"addFolderHyperlinkText": "フォルダを追加する",
        "clearAllHyperlinkText": "すべてのファイルを取り除く",
        "orText": "または",
        "titleText": "アップロード用ファイル",
        "viewComboBox": ["タイル", "サムネイル", "アイコン"],
        "viewComboBoxText": "表示を変更する:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "詳細を隠す",
        "message": "すべてのファイルを正常にアップロードできませんでした。 このメッセージが表示されたら、ウェブマスターにご連絡ください。",
        "showDetailsButtonText": "詳細を表示する",
        "title": "エラーをアップロード "
    },
    "uploadPane": {
        "addFilesButtonText": "+ さらにファイルを追加する",
		"addFolderButtonText": "+ フォルダを追加する",
        "dropFilesHereText": "ここにファイルをドロップ…"		
    },
    "cancelUploadButtonText": "キャンセル",
    "uploadButtonText": "アップロード"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);