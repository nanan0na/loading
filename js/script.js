$(function () {
  // 대상을 변수로 저장
  const $window = $(window);
  const $body = $('body');
  const $loading = `<div class="loading">
  <div class="lds-heart"><div></div></div>
</div>`;
  // body에 맨끝(마지막) 부분에 집어넣기
  $body.append($loading);
  const $target = $('.loading');

  // 로딩이 완료되면
  $window.on('load', function () {
    // 너무 빨리 사라지므로 조금있다가 사라지게끔
    // setTimeout(동작. 시간)
    setTimeout(function () {
      $target.fadeOut();
    }, 1000);
  });
});
