window.onload = function () {
    function getTag (tagName) {
        return document.getElementsByTagName(tagName);
    }

    //获取所有的DIV琴键
    var myDivs = getTag("div");
    // alert(myDiv.length);
    var myAudios = getTag("audio");
    for(var i = 0; i < myDivs.length; i++) {
        myDivs[i].index = i;
        myDivs[i].onclick = function () {
            myAudios[this.index].load();
            myAudios[this.index].play();
        }
        
    }
};