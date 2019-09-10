const marvel = {
    render:() => {
        

        const urlAPI = 'http://gateway.marvel.com/v1/public/characters/1009368/comics?limit=5&ts=1&apikey=1d528255e1776a7ffe4c9c0a2169d499&hash=a5bf91c399170a22169dba1d3d27151a';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

         fetch(urlAPI)
         .then(res => res.json())
         .then((json) => {
            for(const comic of json.data.results){
                    let urlHero = comic.urls[0].url;
                //class="col-md-4" = Classed da div
                contentHTML+= `
               

                <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.name}" class="img-thumbnail">
                </a>
                <a href="${urlHero}" target="_blank">
                <button type="button" class="btn btn-light"><p class="title">${comic.title}</p></button></a>
            </div>
            `;
                
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render();