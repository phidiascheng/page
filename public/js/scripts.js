async function showmore(element){
    var id = element.getAttribute("para");
    var target = document.getElementById(id);
    currentClass = target.className;
    if (element.innerHTML == "..展开.."){
        $('#'+id).removeClass('hidebox');
        element.innerHTML = "..收起..";
    }
    else{
        $('#'+id).addClass('hidebox');
        setTimeout(() => { 
            element.innerHTML = "..展开.."; 
        },800);   
    }
}
