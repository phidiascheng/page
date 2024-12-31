function showmore(element){
    var id = element.getAttribute("para");
    currentClass = document.getElementById(id).className;
    if (currentClass == "bodylist"){
        document.getElementById(id).className = "bodypassage";
        element.innerHTML = "..收起..";
    }
    else{
        document.getElementById(id).className = "bodylist";
        element.innerHTML = "..展开..";
    }
}
