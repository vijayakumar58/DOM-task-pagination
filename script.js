var nav=document.createElement("nav");
nav.setAttribute("aria-label","...");

var ul=document.createElement("ul");
ul.setAttribute("class","pagination");

var li=document.createElement("li");
li.setAttribute("class","page-item disabled");

var a=document.createElement("a");
a.setAttribute("class","page-link");
a.innerHTML="Previous";
li.append(a);

var li1=document.createElement("li1");
li1.setAttribute("class","page-item");

var a1=document.createElement("a");
a1.setAttribute("class","page-link");
a1.setAttribute("href","#");
a1.innerHTML="1";
li1.append(a1);