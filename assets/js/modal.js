/*Modal : gère l'affichage de la boite modale au clic sur un élément de menu*/
function openModal(){
    console.log('je dois ouvrir la boite modal')
    
    
    const fromTemplate = document.getElementById('form-template') //récupérer le contenu du template #form-template
    
    const templateContent = fromTemplate.content.cloneNode(true)//copie du contenu template

    


    document.body.appendChild(templateContent)//Raccrocher le contenu à l'élément "body" du document HTML
}

function closeModal(){
    console.log("je dois fermer la boite modal")
    
    const modal= document.getElementsByClassName('outer-modal')[0]
    document.body.removeChild(modal)
}