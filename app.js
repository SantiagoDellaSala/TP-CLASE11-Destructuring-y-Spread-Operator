const importar = require('./collectibles');

const hotToys = importar('hotToys');
const bandai = importar('bandai');
const starWars = importar('starWars');

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

const collectibles = {
  figuras: unifiedCollectibles,
  listFigures: () => {
    console.log('Todas las figuras:');
    unifiedCollectibles.forEach((figura, index) => {
      console.log(`Figura ${index + 1}:`, figura);
    });
  },
  figuresByBrand: (marca) => {
    console.log(`Figuras de la marca ${marca}:`);
    const filteredFigures = unifiedCollectibles.filter((figura) => figura.marca === marca);
    console.log(filteredFigures);
  }
};

//Lista de figuras
collectibles.listFigures();

//Figuras por marca
collectibles.figuresByBrand('hotToys');
collectibles.figuresByBrand('bandai');
collectibles.figuresByBrand('starWars');