(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Traditional Chinese
window.zh_tw_localization = AU.language.zh_tw = {
    "addFilesProgressDialog": {
        "text": "新增檔案至上傳清單...",
		"waitText": "請稍候，處理可能需要一些時間…"
    },
    "commonDialog": {
        "cancelButtonText": "取消",
        "okButtonText": "確定"
    },
    "descriptionEditor": {
        "cancelButtonText": "取消",
        "saveButtonText": "儲存"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "按一下以關閉"
    },
    "messages": {
        "cmykImagesNotAllowed": "不允許 CMYK 影像。",        
        "cannotReadFile": "無法讀取檔案： {0}。",
        "dimensionsTooLarge": "「{0}」 的尺寸太大，未新增該檔案。 允許的影像尺寸上限是 {1} x {2} 像素。",
        "dimensionsTooSmall": "「{0}」 的尺寸太小，未新增該檔案。 允許的影像尺寸下限是 {1} x {2} 像素。",
        "fileNameNotAllowed": "無法選擇檔案「{0}」。 此檔案有不允許的名稱。",
		"fileSizeTooSmall": "「{0}」 的大小太小，無法新增。 允許的大小下限是 {1}。",
        "filesNotAdded": "由於網站限制，未新增 {0} 個檔案。",
        "maxFileCountExceeded": "並非所有檔案皆已新增。 最多允許您上傳 {0} 個檔案。",
        "maxFileSizeExceeded": "「{0}」 的大小太大，無法新增。 允許的大小上限是 {1}。",
        "maxTotalFileSizeExceeded": "並非所有檔案皆已新增。 超出檔案大小總計上限 ({0})。",
        "previewNotAvailable": "無法使用預覽",
        "tooFewFiles": "至少應該選取 {0} 個檔案才能開始上傳。"
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "編輯說明",
        "imageTooltip": "{0}\n{1}, {3}, \n修改時間： {2}",
        "itemTooltip": "{0}\n{1}, \n修改時間： {2}",
        "removalIconTooltip": "移除",
        "rotationIconTooltip": "旋轉"
    },
    "statusPane": {
        "dataUploadedText": "已上傳資料： {0} / {1}",
        "filesPreparedText": "已準備檔案： {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">檔案總計：</font> {0}",
        "filesUploadedText": "已完成檔案： {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">沒有檔案上傳</font>",
        "preparingText": "準備中...",
        "sendingText": "上傳中..."
    },
    "topPane": {
        "addFilesHyperlinkText": "新增更多檔案",
        "addFolderHyperlinkText": "新增資料夾",
        "clearAllHyperlinkText": "移除所有檔案",
        "orText": "或",
        "titleText": "要上傳的檔案",
        "viewComboBox": ["塊式並列影像", "縮圖", "圖示"],
        "viewComboBoxText": "變更檢視："
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "隱藏詳細資料",
        "message": "並非所有檔案皆已順利上傳。 如果您看到此訊息，請與網站管理員聯絡。",
        "showDetailsButtonText": "顯示詳細資料",
        "title": "上傳錯誤 "
    },
    "uploadPane": {
        "addFilesButtonText": "+ 新增更多檔案",
		"addFolderButtonText": "+ 新增資料夾",
        "dropFilesHereText": "在此放下檔案…"		
    },
    "cancelUploadButtonText": "取消",
    "uploadButtonText": "上傳"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);