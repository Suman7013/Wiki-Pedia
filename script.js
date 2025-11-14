
let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let searchResultsEl = document.getElementById("searchResults");

function createAndAppendSearcheRsult(result) {
    let {
        title,
        link,
        description
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);


    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);


    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    urlEl.classList.add("result-url");
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descEl = document.createElement("p");
    descEl.classList.add("link-desc");
    descEl.textContent = description;
    resultItemEl.appendChild(descEl);

     
    searchResultsEl.appendChild(resultItemEl)

}



function displayResults(searchReasults) {
       
    spinnerEl.classList.add("d-none");

    for(let result of searchReasults) {
        createAndAppendSearcheRsult(result);
    }

}

function searchWikipedia(event){
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url= "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        let options = {
            method:"GET"
        };


    fetch(url,options)
        .then(function(response) {
        return response.json();
        })


        .then(function(jsonData) {
            let {
                search_results


            } = jsonData;

            displayResults(search_results);

        });
    }
};

searchInputEl.addEventListener("keydown",searchWikipedia)
