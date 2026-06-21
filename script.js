let data = [];

const links=document.querySelectorAll('.home .nav-link');

for(let i=0;i<links.length;i++){
    links[i].addEventListener('click',function(e){
        let currentLink=e.target.innerHTML;
        getApiData(currentLink)
    })

}


function getApiData(meal) {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${meal}`)
        .then(function(messege) {
            return messege.json();
        }).then(function(result) {
            data = result.data.recipes;
            displayData();
        });
}

function displayData() {

    let cols = ``;

    for (let i = 0; i < data.length; i++) {

        cols += `

        <div class="col-md-4">

            <div class="card my-4">

                <img src="${data[i].image_url}">

                <div class="card-body text-center">

                    <h4 class="card-title">
                        ${data[i].title}
                    </h4>

                    <p>
                        ${data[i].publisher}
                    </p>

                </div>

            </div>

        </div>
        `;
    }


    document.getElementById('colsData').innerHTML = cols;
}

getApiData("pizza")