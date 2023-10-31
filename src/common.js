function clearPage(){
    var content = document.getElementById('content');

    content.replaceChildren();

    /*while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    }*/ 
}

export default clearPage;