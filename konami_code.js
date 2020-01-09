const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  document.body.addEventListenter('keydown', function(e) {
    const key = parseInt(e.key || e.detail);
    
    if (codes[index] === key) {
      index++;
      
      if (index = codes.length) {
        alert('You have done it!');
      }
    } else {
      index = 0;
    }
  });
}
