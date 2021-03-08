let button = document.querySelector("#randomPost");
button.addEventListener("click", getRandomCat);

function getRandomCat() {
    const catNumber = Math.ceil((Math.random() * 1000) + 100);

    //fetch(`http://placekitten.com/${catNumber}`)
    //    .then(function (response) {
    //        return response.json();
    //    })

    const element = document.createElement("div");
    //schreibe html-code in das div.element
    element.innerHTML = `
        <img src="http://placekitten.com/${catNumber}"></img>
        
        `
        ;
    document.querySelector(".container").appendChild(element);
};


