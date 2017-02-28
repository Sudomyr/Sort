var A = [ 9, 5, 2, -4, 8, 12, 4, -2, 0, 1, 45, 10, 6, -12 ];

function bubbleSort(A) {

    for (var i = 0; i < A.length-1; i++) {
        for (var j = 0; j < A.length-i; j++) {
            if (A[j] < A[j - 1]) {
                var tmp = A[j];
                A[j] = A[j - 1];
                A[j - 1] = tmp;
            }
        }
    }
    return A;
}

var SortResult = document.getElementById('mOut');
var sortBtn = document.getElementById('sort-btn');
sortBtn.addEventListener("click", function(){
    SortResult.innerText = "Відсортований масив : [ " + bubbleSort(A) + " ]";
    resetBtn.style.display = "block";
})

var resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener("click", function(){
    SortResult.innerText = '';
    resetBtn.style.display = "none";
})