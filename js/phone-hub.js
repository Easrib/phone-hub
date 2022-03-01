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
                            <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-success">Details</button>
                        </div>
                    </div>`
        searchResult.appendChild(div);
    });

}

// details display area 
const loadPhoneDetails = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`

    fetch(url)
        .then(res => res.json())
        .then(json => displayPhoneDetails(json.data))
}

const displayPhoneDetails = details => {
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card')
    div.classList.add('p-2')
    div.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${details.image}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                         additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>`
    phoneDetails.appendChild(div);

}