// search bar js 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText == '') {
        alert('Please write something at searchbox')
    }
    else {
        const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`

        fetch(url)
            .then(res => res.json())
            .then(json => displaySearchResult(json.data))
    }
}

// search results area 
const displaySearchResult = (data) => {

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (data.length == 0) {
        alert('No result Found')
    }
    data.slice(0, 20).forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                    <div class="card h-100">
                        <img src="${phone.image}" class="card-img-top w-75 mx-auto mt-2">
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
    phoneDetails.textContent = '';
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
                    <h5 class="card-title">${details.name}</h5>
                    <p class="card-text">Main Features: Storage- ${details.mainFeatures.storage} , 
                    Display- ${details.mainFeatures.displaySize},
                    Chipset- ${details.mainFeatures.chipSet},
                    Memory- ${details.mainFeatures.memory} </p>
                    <p class="card-text">Released Date: ${details.releaseDate}</p>
                    <p class="card-text">Sensors: ${details.mainFeatures.sensors}</p>
                    <p class="card-text">Others: WLAN- ${details?.others?.WLAN ?? 'No Data Found'},
                    Bluetooth- ${details?.others?.Bluetooth ?? 'No Data Found'},
                    GPS- ${details?.others?.GPS ?? 'No Data Found'},
                    NFC- ${details?.others?.NFC ?? 'No Data Found'},
                    Radio- ${details?.others?.Radio ?? 'No Data Found'},
                    USB- ${details?.others?.USB ?? 'No Data Found'}
                    </p>
                </div>
            </div>
        </div>`
    phoneDetails.appendChild(div);

}