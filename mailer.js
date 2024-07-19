function showMailer(){
    document.getElementById("mailer").style.display = "flex";

}
document.getElementById("shower").onclick = showMailer;
function hideMailer(){
    document.getElementById("mailer").style.display = "none";
}
document.getElementById("closer").onclick = hideMailer;