/**
 * Created by tanlongguang1 on 2016/9/3.
 */
var pic = document.getElementsByName('pic');
var btn =document.getElementsByName('btn');
for(var i=0;i< pic.length;i++){
    if(i==0){
        pic[i].style.display = 'block';
        btn[i].style.background = ' #DD5862';
    }else{
        pic[i].style.display = 'none';
        btn[i].style.background = '#B5B5B5';
    }
}
for(var i=0;i<6;i++){
    btn[i].index = i;
    pic[i].index = i;
    btn[i].onclick = function(){
        click(this.index);
    }

}
function click(obj){
for(var j = 0;j<6;j++){
    if(obj==j){
        pic[j].style.display = 'block';
        btn[j].style.background = ' #DD5862';
    }else{
        pic[j].style.display = 'none';
        btn[j].style.background = '';
    }
}
}
debugger;
function forword(){
    for(var i=0;i< pic.length;i++){
        if(pic[i].style.display=='block'){
            var c=parseInt(pic[i].index);
        }
    }
    if(c==5){
        c=0;
        for(var j=0;j<pic.length;j++){
            if(c==j){
                pic[j].style.display = 'block';
                btn[j].style.background = '#DD5862';
            }else{
                pic[j].style.display = 'none';
                btn[j].style.background = '#B5B5B5';
            }
        }
    } else{
        c+=1;
        for (var j=0;j<pic.length;j++) {
            if (c==j) {
                pic[j].style.display = 'block';
                btn[j].style.background = '#DD5862';
            }else{
                pic[j].style.display = 'none';
                btn[j].style.background = '#B5B5B5';
            }
        }

    }
}
setInterval(forword,3000);
