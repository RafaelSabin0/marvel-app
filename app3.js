


const marvel = {
    render:() => {
        

        const urlAPI = 'http://gateway.marvel.com/v1/public/characters/1009356?ts=1&apikey=1d528255e1776a7ffe4c9c0a2169d499&hash=a5bf91c399170a22169dba1d3d27151a';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

         fetch(urlAPI)
         .then(res => res.json())
         .then((json) => {
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                //class="col-md-4" = Classed da div
                contentHTML+= `
                
                <div class="card text-center">
                <div class="card-body">
                <div class="thumbs">
                     <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                <br>
                <a href="/comics/comics3.html">
                <button type="button" class="btn btn-primary"><h1 class="title">${hero.name}</h1></button>
                </a>
              
                </div>
                </div>
                <div class="card-footer text-muted">

        </div>
</div>
  
  
  `;
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render();