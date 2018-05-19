(function(window, undefined) {

 var AU = (window.Aurigma || (window.Aurigma = { __namespace: true })) &&
    (window.Aurigma.ImageUploaderFlash || (window.Aurigma.ImageUploaderFlash = { __namespace: true }));

AU.language || (AU.language = { __namespace: true });

var $au = AU;


// Korean
window.ko_localization = AU.language.ko = {
    "addFilesProgressDialog": {
        "text": "파일을 업로드 목록에 추가...",
		"waitText": "기다려 주십시오. 시간이 걸릴 수 있습니다…"
    },
    "commonDialog": {
        "cancelButtonText": "취소",
        "okButtonText": "확인"
    },
    "descriptionEditor": {
        "cancelButtonText": "취소",
        "saveButtonText": "저장"
    },
    "imagePreviewWindow": {
        "closePreviewTooltip": "닫으려면 클릭"
    },
    "messages": {
        "cmykImagesNotAllowed": "CMYK 이미지가 허용되지 않습니다.",        
        "cannotReadFile": "파일을 읽을 수 없음: {0}.",
        "dimensionsTooLarge": "“{0}”의 제원이 너무 커서, 파일을 추가할 수 없었습니다. 최대 허용 이미지 제원은 {1}x{2} 픽셀입니다.",
        "dimensionsTooSmall": "“{0}”의 제원이 너무 작아서, 파일이 추가되지 않았습니다. 최소 허용 이미지 제원은 {1}x{2} 픽셀입니다.",
        "fileNameNotAllowed": "파일“{0}”을 선택할 수 없습니다. 이 파일의 이름을 허용할 수 없습니다.",
		"fileSizeTooSmall": "“{0}”의 크기는 너무 작아 추가할 수 없습니다. 최소 허용 크기는 {1}입니다.",
        "filesNotAdded": "{0} 파일은 사이트 제한 때문에 추가할 수 없었습니다.",
        "maxFileCountExceeded": "일부 파일이 추가되지 않았습니다. {0}개가 넘는 파일은 업로드할 수 없습니다.",
        "maxFileSizeExceeded": "“{0}”의 크기는 너무 커서 추가할 수 없습니다. 최대 허용 크기는 {1}입니다.",
        "maxTotalFileSizeExceeded": "일부 파일이 추가되지 않았습니다. 최대 전체 파일 크기({0})을(를) 초과했습니다.",
        "previewNotAvailable": "미리보기를 이용할 수 없습니다.",
        "tooFewFiles": "최소 {0}개의 파일을 선택해야 업로드를 시작할 수 있습니다."
    },
    "paneItem": {
        "descriptionEditorIconTooltip": "설명 편집",
        "imageTooltip": "{0}\n{1}, {3}, \n수정됨: {2}",
        "itemTooltip": "{0}\n{1}, \n수정됨: {2}",
        "removalIconTooltip": "제거",
        "rotationIconTooltip": "회전"
    },
    "statusPane": {
        "dataUploadedText": "업로드된 데이터: {0} / {1}",
        "filesPreparedText": "준비된 파일: {0} / {1}",
        "filesToUploadText": "<font color=\"#7a7a7a\">총 파일:</font> {0}",
        "filesUploadedText": "완료된 파일: {0} / {1}",
        "noFilesToUploadText": "<font color=\"#7a7a7a\">업로드할 파일 없음</font>",
        "preparingText": "준비중...",
        "sendingText": "업로드중..."
    },
    "topPane": {
        "addFilesHyperlinkText": "파일 추가",
		"addFolderHyperlinkText": "폴더 추가",
        "clearAllHyperlinkText": "모든 파일 제거",
        "orText": "또는",
        "titleText": "업로드할 파일",
        "viewComboBox": ["타일", "썸네일", "아이콘"],
        "viewComboBoxText": "보기 변경:"
    },
    "uploadErrorDialog": {
        "hideDetailsButtonText": "세부사항 숨기기",
        "message": "일부 파일이 성공적으로 업로드되지 않았습니다. 이 메시지가 나타나면, 웹 마스터에게 연락하십시오.",
        "showDetailsButtonText": "세부사항 표시",
        "title": "업로드 오류 "
    },
    "uploadPane": {
        "addFilesButtonText": "+ 더 많은 파일 추가",
		"addFolderButtonText": "+ 폴더 추가",
        "dropFilesHereText": "파일을 여기에 놓으십시오…"		
    },
    "cancelUploadButtonText": "취소",
    "uploadButtonText": "업로드"
};


if(!window.$au && typeof $au != "undefined") window.$au = $au;

if(window.$au) window.$au.imageUploaderFlash = $au.imageUploaderFlash;
	
})(window);