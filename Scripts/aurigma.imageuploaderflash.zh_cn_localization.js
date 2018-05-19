(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Simplified Chinese
window.zh_cn_localization = AU.language.zh_cn = {
    "addFilesProgressDialog": {
        "text": "正在将文件添加到上传列表...",
		"waitText": "请稍候，处理可能需要一些时间"
    },
    "commonDialog": {
        "cancelButtonText": "取消",
        "okButtonText": "确定"
    },
    "descriptionEditor": {
        "cancelButtonText": "取消",
        "saveButtonText": "保存"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "单击以关闭"
    },
    "messages": {
        "cmykImagesNotAllowed": "不允许 CMYK 图像。",        
        "cannotReadFile": "无法读取文件： {0}。",
        "dimensionsTooLarge": "“{0}”的尺寸太大，无法添加该文件。 允许的最大图像尺寸是 {1} x {2} 像素。",
        "dimensionsTooSmall": "“{0}”的尺寸太小，无法添加该文件。 允许的最小图像尺寸是 {1} x {2} 像素。",
        "fileNameNotAllowed": "不能选择文件 “{0}”。 此文件有不允许的名词。",
		"fileSizeTooSmall": "“{0}”的尺寸太小，无法添加。 允许的最小尺寸为 {1}。",
        "filesNotAdded": "由于站点限制，有 {0} 个文件未添加。",
        "maxFileCountExceeded": "并非所有文件均已添加。 最多允许您上传 {0} 个文件。",
        "maxFileSizeExceeded": "“{0}”的尺寸太大，无法添加。 允许的最大尺寸为 {1}。",
        "maxTotalFileSizeExceeded": "并非所有文件均已添加。 超过了最大文件总大小 ({0})。",
        "previewNotAvailable": "预览不可用",
        "tooFewFiles": "要启动上传，至少应选中 {0} 个文件。"
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "编辑说明",
        "imageTooltip": "{0}\n{1}、{3}、\n修改时间： {2}",
        "itemTooltip": "{0}\n{1}、\n修改时间： {2}",
        "removalIconTooltip": "删除",
        "rotationIconTooltip": "旋转"
    },
    "statusPane": {
        "dataUploadedText": "已上传数据： {0} / {1}",
        "filesPreparedText": "已准备文件： {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">文件总数：</font> {0}",
        "filesUploadedText": "已完成文件： {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">没有可上传的文件</font>",
        "preparingText": "正在准备...",
        "sendingText": "正在上传..."
    },
    "topPane": {
        "addFilesHyperlinkText": "添加更多文件",
		"addFolderHyperlinkText": "添加文件夹",
        "clearAllHyperlinkText": "删除所有文件",
        "orText": "或者",
        "titleText": "要上传的文件",
        "viewComboBox": ["平铺", "缩略图", "图标"],
        "viewComboBoxText": "更改视图："
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "隐藏详细信息",
        "message": "并非所有文件均已成功上传。 如果您看到此消息，请与网络主管联系。",
        "showDetailsButtonText": "显示详细信息",
        "title": "上传错误 "
    },
    "uploadPane": {
        "addFilesButtonText": "+ 添加更多文件",
        "addFolderButtonText": "+ 添加文件夹",
        "dropFilesHereText": "在此放下文件"		
    },
    "cancelUploadButtonText": "取消",
    "uploadButtonText": "上传"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);