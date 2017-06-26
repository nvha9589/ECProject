//=== カレンダー ====
$('#limitDate,#startDate,#endDate,#workPossibleDate').datepicker({
    format: 'yyyy/mm/dd',
    startDate: '0d',
    language: 'ja'
});

//=== 画像選択 ====
$('input[id=lefile]').change(function() {
    $('#upload-file').val($(this).val());
});

//=== 企業検索 ====
var searchParams = {};
var url = location.href;

$(document).on("click", "#searchSubmit", (function() {

    var category1Params = $('[class="category1"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (category1Params) {
        searchParams['category1'] = category1Params;
    }

    var category2Params = $('[class="category2"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (category2Params) {
        searchParams['category2'] = category2Params;
    }

    var skillParams = $('[id="skills"]').val();

    if (skillParams) {
        searchParams['skills'] = skillParams;
    }

    var prefectureParams = $('[class="prefecture1"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (prefectureParams) {
        searchParams['prefecture1'] = prefectureParams;
    }

    var searchJoin = $.param(searchParams);
    window.location.href = '?'+searchJoin;
}));


//=== 案件依頼検索対応() ====
//リクエスト：申し込みタイプ、開発期間、予算、カテゴリ
var orderSearchParams = {};
var url = location.href;

$(document).on("click", "#orderSearchSubmit", (function() {

    var category1Params = $('[class="category1"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (category1Params) {
        orderSearchParams['category1'] = category1Params;
    }

    var category2Params = $('[class="category2"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (category2Params) {
        orderSearchParams['category2'] = category2Params;
    }

    var skillParams = $('[id="skills"]').val();

    if (skillParams) {
        orderSearchParams['skills'] = skillParams;
    }

    var prefectureParams = $('[class="prefecture1"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (prefectureParams) {
        orderSearchParams['prefecture1'] = prefectureParams;
    }

    var orderSearchJoin = $.param(orderSearchParams);
    console.log(orderSearchJoin);

    window.location.href = '/order?'+orderSearchJoin;
}));


//=== 案件募集検索対応() ====
//リクエスト：申し込みタイプ、開発期間、予算、カテゴリ
var receiveSearchParams = {};
var url = location.href;

$(document).on("click", "#receiveSearchSubmit", (function() {

    var category1Params = $('[class="category1"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (category1Params) {
        receiveSearchParams['category1'] = category1Params;
    }

    var category2Params = $('[class="category2"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (category2Params) {
        receiveSearchParams['category2'] = category2Params;
    }

    var skillParams = $('[id="skills"]').val();

    if (skillParams) {
        receiveSearchParams['skills'] = skillParams;
    }

    var prefectureParams = $('[class="prefecture1"]:checked').map(function(){
        return $(this).val();
    }).get().join('_');

    if (prefectureParams) {
        receiveSearchParams['prefecture1'] = prefectureParams;
    }

    var receiveSearchJoin = $.param(receiveSearchParams);
    console.log(receiveSearchJoin);

    window.location.href = '/receive?'+receiveSearchJoin;
}));



//=== 案件依頼削除
$('#orderDelete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
    var recipient = button.data('whatever');

    $("#onclickButton").attr("onclick", "location.href='/order/update/"+recipient+"/delete'");
});

//=== 案件募集削除
$('#receiveDelete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); //モーダルを呼び出すときに使われたボタンを取得
    var recipient = button.data('whatever');

    $("#onclickButton").attr("onclick", "location.href='/receive/update/"+recipient+"/delete'");
});