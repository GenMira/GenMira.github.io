var bt = document.getElementById("target");
var bt = document.getElementById("bot");
bt.addEventListener("click",function(e){
    var numlist=["私","ウチ","ウチ","ウチ","僕","僕","僕","朕","俺"
    ,"（自分の名前）","（自分の名前）","拙者","ワタクシ","妾","ワタクシ","妾","自分"];
    var selectnum = Math.floor(Math.random()*numlist.length);

    var element = "<p>"+numlist[selectnum]+"</p>";
    target.innerHTML = element;
},false);
