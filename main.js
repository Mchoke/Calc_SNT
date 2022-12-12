let getNumStart = document.getElementById('numStart');
let getNumEnd = document.getElementById('numEnd');
let getBtn = document.getElementById('btncheck');
let arrSNT = [];

getBtn.onclick = () => {  
    arrSNT = [];
    let valueNumStart = parseInt(getNumStart.value);
    let valueNumEnd = parseInt(getNumEnd.value);
    if(valueNumStart >= valueNumEnd) {
        alert('Mời thằng chim ngắn nhập lại số');
    }
    for (let i = valueNumStart; i <= valueNumEnd ; i++) {
        arrSNT.push(i);
    }
    document.getElementById('StartArr').innerHTML = `[${arrSNT}]`;
    
    function checkSNT (num) {
        //checkNum = 1 => không phải số nguyên tố
        //CheckNum = 0 => số nguyên tố
        let checkNum = 1;
        if (num <2) return checkNum = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
        /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
        let i = 2;
        while(i < num) {
            if( num % i == 0 ) {
                checkNum = 0;
                break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
            }
            i++;
        }
        return checkNum;
    }
    checkSNT(arrSNT);

    let resultArrSNT = [];
    for (let i = 0; i < arrSNT.length; i++){
        // console.log(checkSNT(arrSNT[i]));
        if (checkSNT(arrSNT[i]) == 1) {
            // console.log(arrSNT[i]);
            resultArrSNT.push(arrSNT[i]);
        }
    }
    document.getElementById('SNTArr').innerHTML = `Mảng số nguyên tố lấy từ số thằng chim ngắn đã nhập: [${resultArrSNT}]`
    if(valueNumStart >= valueNumEnd) {
        document.getElementById('StartArr').innerHTML = "";
        document.getElementById('SNTArr').innerHTML = "";
    }

    let totalArr = resultArrSNT.reduce( (total, ItemArr) => {
        return total + ItemArr;
    }, 0)
    document.getElementById('ResultTotal').innerHTML = `Tổng các số nguyên tố trong mảng: ${totalArr}`;
}

