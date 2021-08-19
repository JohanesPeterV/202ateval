var container = document.getElementById("container");

container.addEventListener("mousemove",parallax);

function parallax(e) {

    console.log("aaa");
  var docs = document.getElementsByClassName("layer");
  let len = docs.length;

  const x = - (400 * (1));
  docs[0].style.transform = `translateX(${x}px)`;

  for (let i = 0; i < len; i++) {
    const x = (e.clientX * 0.1 * (i + 1)) - (400 * (i + 1));
    const y = e.clientY * 0.1 * (i + 1)- (6 );
    docs[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
    
  }

}
