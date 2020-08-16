const phrases = ['그림들을 달라고 보채는 중..', '신뢰를 쌓는 중..', '엄청난 업적을 정리하는 중..', '페이지를 깨끗하게 닦는 중..', '도형을 오려내 붙이는 중..', '버그들 속에서 헤매는 중..', '자고있는 텍스트들을 깨우는 중..'];

window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.scrollTop = 0;
    document.getElementById('wait').innerText = phrases[Math.floor(Math.random() * 7)];
});