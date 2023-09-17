function mailto() {
    var who = document.getElementsByClassName("mail")[0].value;
    var what = document.getElementsByClassName("content")[0].value;
    if (confirm("Do you want to send the email to " + who + "with the topic of " + what + "?") == true) {
        parent.location.href = 'mailto:3359688605@qq.com?' + who + '?subject=Hi, Brother!(A message from website)&body=' + what + '';
    }
}

mailto();