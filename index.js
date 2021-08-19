var container = document.getElementById("container");

container.addEventListener("mousemove",parallax);

function parallax(e) {

    console.log("aaa");
  var docs = document.getElementsByClassName("layer");
  let len = docs.length;

  for (let i = 0; i < len; i++) {
    const x = e.clientX * 0.006 * (i + 1) - 6.2 * (i + 1);
    const y = e.clientY * 0.006 * (i + 1);
    docs[i].style.transform = `translateX(${x}px) translateY(${y}px)`;

  }
}
