var elements = document.getElementsByClassName("_4kny _2s24");
    
    for (var i = 0, len = elements.length; i < len; i++) {
        if(i>=1)
            elements[i].parentNode.removeChild(elements[i]);
    }