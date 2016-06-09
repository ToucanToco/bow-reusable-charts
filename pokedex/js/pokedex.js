var pokemon = [
  {name: 'Bulbizarre'},
  {name: 'Herbizarre'},
  {name: 'Florizarre'},
  {name: 'Carapuce'},
  {name: 'Carabaffe'},
  {name: 'Pikachu'},
  {name: 'Boustiflor'},
  {name: 'Raichu'},
  {name: 'Abo'},
  {name: 'Abra'},
  {name: 'Roucool'},
  {name: 'Roucoups'},
  {name: 'Roucarnage'},
  {name: 'Nidoking'},
  {name: 'Nidorino'},
  {name: 'Nidorina'},
  {name: 'Nidoran'},
  {name: 'Smogo'},
  {name: 'Smogogo'}
]

var options = {
  caseSensitive: false,
  includeScore: true,
  shouldSort: true,
  tokenize: false,
  threshold: 0.1,
  location: 0,
  distance: 10,
  maxPatternLength: 32,
  keys: ["name"]
};

var fuse = new Fuse(pokemon, options);

var searchPokedex = pokedex()
                    .valueSelector('name')
                    .imgSelection('#imgPokemon')
                    .maxPokemon(4)

document.addEventListener("DOMContentLoaded", function(event) {
  d3.select("#nb")
  .on("keyup", function() {
    d3.select("#info-screen")
    .datum(fuse.search(this.value))
    .call(searchPokedex)
  });
});

function pokedex() {
  var maxPokemon = 5;
  var valueSelector = 'type';
  var imgSelection = '';

  function search(selection) {
    selection.each(function (data) {
      d3.select(this)
      .selectAll('p')
      .remove();

      d3.select(imgSelection)
      .attr('src', '')
      .attr('alt', '');

      d3.select(this).selectAll('p')
      .data(data)
      .enter()
      .append('p')
      .text(function(d) {
        return d[valueSelector]
      })

      if(imgSelection != '' && data.length == 1) {
        pathImg = 'images/pokemon-png/' + data[0][valueSelector] + '.png'
        d3.select(imgSelection)
        .attr('src', pathImg)
        .attr('alt', data[0][valueSelector].toLowerCase())
      }
    })
  }

  search.maxPokemon = function(value) {
    if(!arguments.length) return maxPokemon;
    maxPokemon = value;
    return search;
  }

  search.imgSelection = function(value) {
    if(!arguments.length) return imgSelection;
    imgSelection = value;
    return search;
  }

  search.valueSelector = function(value) {
    if(!arguments.length) return valueSelector;
    valueSelector = value;
    return search;
  }

  return search;
}
