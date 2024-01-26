document.getElementById("Add").addEventListener("click",addOption);

function addOption()
{
    var list = document.getElementById("task");
    var newElement = document.createElement("li");
    let name = document.getElementById("name").value;
    let desc = document.getElementById("desc").value; 
    newElement.innerHTML =
        '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">' +
        '<label class="form-check-label" for="flexCheckDefault">' +
        '</label>' +
        ' Name : ' + name + ', ||||| Description : ' + desc + " ||||| Importance of the task    :  "+
        '<input type="range" style = "width : 200px;"  id="customRange1">'; //range without bootstrap
    list.appendChild(newElement);
    saveElements();
}

document.getElementById("delete").addEventListener("click",deleteOption);

function deleteOption()
{
    var list = document.getElementById("task");
    var selection = document.querySelectorAll("#task li");
    var length = selection.length;
    for ( let i = 0; i < length ; i++){
         if (document.getElementById("flexCheckDefault").checked === true) {
                list.removeChild(selection[i]);
            }
    }
    saveElements();
}

function saveElements() 
{
    var list = document.getElementById("task");
    var elements = list.getElementsByTagName("li");
    // Convertir les éléments en tableau de chaînes
    var elementsArray = Array.from(elements).map(function(element) {
        return element.textContent;
    });
    // Sauvegarder le tableau dans le stockage local
    localStorage.setItem("options", JSON.stringify(elementsArray));
}
document.addEventListener("DOMContentLoaded",chargerElements())

function chargerElements() 
{
    var list = document.getElementById("task");
    // Récupérer les éléments depuis le stockage local
    var elementsArray = JSON.parse(localStorage.getItem("options")) || [];
    // Ajouter les éléments à la liste
    elementsArray.forEach(function(elementText) 
    {
        var newElement = document.createElement("li");
        newElement.innerHTML =
        '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">' +
        '<label class="form-check-label" for="flexCheckDefault">' +
        '</label>' + elementText +
        '<input type="range" style = "width : 200px;"  id="customRange1">';
        list.appendChild(newElement);
    });
}