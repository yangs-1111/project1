// 한줄 메모(방명록) 등록 기능
function addMemo() {
    const input = document.getElementById('memo-input');
    const memoText = input.value.trim();
    
    // 빈 칸 입력 방지
    if (memoText === "") {
        alert("내용을 입력해주세요!");
        return;
    }

    const memoList = document.getElementById('memo-list');
    const li = document.createElement('li');
    
    // 현재 날짜 구하기 (MM/DD 형식)
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const timeStr = `${month}/${date}`;

    // 리스트에 들어갈 HTML 생성
    li.innerHTML = `<span>💬 ${memoText}</span><span class="date">${timeStr}</span>`;
    
    // 새로운 메모를 가장 위(최신순)로 추가
    memoList.insertBefore(li, memoList.firstChild);
    
    // 등록 후 입력창 비우기
    input.value = "";
}

// 입력창에서 엔터키(Enter)를 눌러도 등록되도록 설정
document.getElementById('memo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addMemo();
    }
});
