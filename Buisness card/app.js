function cname() {
  document.getElementById("oname").innerHTML = document.getElementById(
    "name"
  ).value;
}
function cmessage() {
  document.getElementById("op").innerHTML = document.getElementById(
    "message"
  ).value;
}
function cleft() {
  document.getElementById("1").style.textAlign = "left";
}
function ccenter() {
  document.getElementById("1").style.textAlign = "center";
}
function cright() {
  document.getElementById("1").style.textAlign = "right";
}
function ctname() {
  document.getElementById("otname").innerHTML = document.getElementById(
    "tname"
  ).value;
}
function ctitle() {
  document.getElementById("otitle").innerHTML =
    "Job Title:" + document.getElementById("title").value;
}
function cemail() {
  document.getElementById("oemail").innerHTML =
    "Email:" + document.getElementById("email").value;
}
function ctel() {
  document.getElementById("otel").innerHTML =
    "Tel:" + document.getElementById("phone").value;
}
function cbgcolor() {
  document.getElementById("1").style.backgroundColor = document.getElementById(
    "bgcolor"
  ).value;
}
function ccolor() {
  document.getElementById("1").style.color = document.getElementById(
    "color"
  ).value;
}
