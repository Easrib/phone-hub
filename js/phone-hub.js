// search bar js 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(json => displaySearchResult(json.data))

    searchField.value = '';
}

// search results area 
const displaySearchResult = (data) => {

    const searchResult = document.getElementById('search-result');

    data.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                    <div class="card h-100">
                        <img src="${phone.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${phone.phone_name}</h5>
                            <p class="card-text">Brand: ${phone.brand}</p>
                            <button type="button" class="btn btn-success">Details</button>
                        </div>
                    </div>`
        searchResult.appendChild(div);
    });

}