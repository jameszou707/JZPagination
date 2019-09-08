function makePageBar({pageFunc,pageContainer,pgIndex=1,pgSize=7,gpSize=6,roCount=100,simpleModel=false,isCn=true}){var langObj=isCn?{next:'下一页',prev:'上一页',nextG:'下一组',prevG:'上一组'}:{next:'Next',prev:'Prev',nextG:'NextGroup',prevG:'PrevGroup'};var pgCount=Math.ceil(roCount/pgSize);var groupFirstPageIndex=0;var groupCount=0;if(typeof pageContainer=="string")pageContainer=document.getElementById(pageContainer);pageContainer.innerHTML="";groupFirstPageIndex=(Math.floor(((pgIndex-1)/gpSize))*gpSize)+1;groupCount=Math.ceil(pgCount/gpSize);if(!simpleModel)pageContainer.innerHTML="页码："+pgIndex+"/"+pgCount+" │ 共"+roCount+"条";var pagePrevGroup=document.createElement("a");pagePrevGroup.href="javascript:void(0)";if(groupFirstPageIndex>1){pagePrevGroup.onclick=function(){pgIndex=groupFirstPageIndex-1;pageFunc(groupFirstPageIndex-1)}}pagePrevGroup.innerHTML=langObj.prevG;pageContainer.appendChild(pagePrevGroup);var pagePrev=document.createElement("a");pagePrev.href="javascript:void(0)";pagePrev.onclick=function(){if(pgIndex>1){pgIndex--;pageFunc(pgIndex)}else{alert("已经是第一页咯~~！")}};pagePrev.innerHTML=langObj.prev;pageContainer.appendChild(pagePrev);var tempI=0;tempI=groupFirstPageIndex;do{var pageA=document.createElement("a");pageA.href="javascript:void(0)";if(tempI==pgIndex){pageA.className='active';pageA.innerHTML=tempI}else{pageA.setAttribute("pi",tempI);pageA.onclick=function(){pageFunc(this.getAttribute("pi"))};pageA.innerHTML=tempI}pageContainer.appendChild(pageA);tempI++}while(tempI<groupFirstPageIndex+gpSize&&tempI<=pgCount);var pageNext=document.createElement("a");pageNext.href="javascript:void(0)";pageNext.onclick=function(){if(pgIndex<pgCount){pgIndex++;pageFunc(pgIndex)}else{alert("已经是最后一页咯~~！")}};pageNext.innerHTML=langObj.next;pageContainer.appendChild(pageNext);var pageNextGroup=document.createElement("a");pageNextGroup.href="javascript:void(0)";if(groupFirstPageIndex+gpSize<=pgCount){pageNextGroup.onclick=function(){pgIndex=groupFirstPageIndex+gpSize;pageFunc(groupFirstPageIndex+gpSize)}}pageNextGroup.innerHTML=langObj.nextG;pageContainer.appendChild(pageNextGroup);if(!simpleModel){var sel=document.createElement("select");sel.onchange=function(){var pi=this.value;pageFunc(pi)};for(var i=0;i<pgCount;i++){var opt=new Option("第"+(i+1)+"页",i+1);if(i==(pgIndex-1))opt.selected=true;sel.options.add(opt)}pageContainer.appendChild(sel)}};