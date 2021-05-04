let navbar = document.querySelector(".navbar")
let listItem = document.querySelectorAll(".list-item")

navbar.addEventListener("click" , dropDown)

function dropDown(e)
{
    if(e.target.classList.contains("nav-link"))
    {
        let dropDownItems = e.target.nextElementSibling ;
            
        if(dropDownItems.classList.contains("hide"))
        {
            dropDownItems.classList.remove("hide")
            dropDownItems.classList.add("show")
        }
        else{
            dropDownItems.classList.remove("show")
            dropDownItems.classList.add("hide")
        }
    }

}

