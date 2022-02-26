let plus = document.querySelectorAll('.question-block i');
console.log(plus);

let boxOpen = false;

let populateText = document.querySelectorAll('.populate-text');
// let keys = plus.map((x, index) => {return[x, populateText[index]]});
// console.log(keys);
for (let [index, i] of plus.entries()) {
    console.log(i);
    i.addEventListener('click', () => {
        for (let [index_j ,j] of plus.entries()) {
            if(i !== j) {
                if (!populateText[index_j].classList.contains('disabled')) {
                    populateText[index_j].classList.add('disabled');
                }

                if (j.classList.contains('close-btn')) {
                    j.classList.remove('close-btn');
                }
            }

            else {
                populateText[index].classList.toggle('disabled');
                populateText[index].classList.add('dropdown-animation');
                i.classList.toggle('close-btn');
            }
        }
    })
}