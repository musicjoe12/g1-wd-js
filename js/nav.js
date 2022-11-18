(function(){
    let listOfLinks = document.querySelectorAll("nav ul li")
    console.dir(listOfLinks)

    for (let i=0; i < listOfLinks.length; i++)
    {
        let currentLink = listOfLinks[i].querySelector("a").getAttribute("href")
        console.info(currentLink)
        if(currentLink === filename){
            listOfLinks[i].setAttribute("class", "currentPage")
            break
        }
    }
})()