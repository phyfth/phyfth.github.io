function Buscar() {
    var input, filter, ol, li, a, i, txtValue, AutorFecha, div, aux;
    input = document.getElementById("ln-search-bar");
    filter = input.value.toUpperCase();
    ol = document.getElementById("ln-box");
    li = ol.getElementsByTagName("li");
	AutorFecha = document.getElementById("autor-fecha");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
	    div = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
	    aux = div.textContent || div.innerText;
        if ((txtValue.toUpperCase().indexOf(filter) > -1) || (aux.toUpperCase().indexOf(filter) > -1)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}