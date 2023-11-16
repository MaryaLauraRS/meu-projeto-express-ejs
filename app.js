const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  { id: 1, image: "https://m.media-amazon.com/images/I/61FTkkWMA9L._SY342_.jpg", nome: "Corrupt (devil's Night Livro 1)", descricao:"Nós esperamos. Fomos pacientes. E agora... cada um de seus pesadelos se tornaria realidade.", preco: 68.04, altor:"Edição Português | por Penelope Douglas"  },


  { id: 2, image: "https://m.media-amazon.com/images/I/616HZZs1uXL._SY342_.jpg", nome: "Hideaway (devil's Night Livro 2)", descricao:"Eu vi o seu refúgio. Está na hora de você ver o meu. Hideaway é um romance de suspense.", preco: 68.04, altor:"Edição Português | por Penelope Douglas"  },


  { id: 3, image: "https://m.media-amazon.com/images/I/61cj8JI4T9L._SY342_.jpg", nome: "Kill Switch Devil’s Night 3", descricao:"Como o novo homem da casa, agora teria livre acesso a ela. Kill Switch é um romance de suspense", preco: 75.21, altor:"Edição Português | por Penelope Douglas"  },


  { id: 4, image: "https://m.media-amazon.com/images/I/510S2WZwJ+S._SY385_.jpg", nome: "Conclave Devil’S Night 3.5", descricao:"Encontraríamos Will. Nós consolidaríamos nossos planos, e acabaríamos com qualquer ameaça. Se sobrevivêssemos ao Conclave.", preco: 50.12, altor:"Edição Português | por Penelope Douglas"  },


  { id: 5, image: "https://m.media-amazon.com/images/I/51R657iiHBL._SY385_.jpg", nome: "Nightfall (Devil'S Night Livro 4)", descricao:"Um sorriso se espalha pelo meu rosto quando me lembro.Blackchurch abriga cinco prisioneiros. Eu sou apenas um de seus problemas.", preco: 82.38, altor:"Edição Português | por Penelope Douglas"  },


  { id: 6, image: "https://m.media-amazon.com/images/I/71qz7-CKo2L._SY385_.jpg", nome: "Fire Night (Devil'S Night Livro 6)", descricao:"A história se passa dez meses antes do epílogo de Nightfall.A trama é contada sob o ponto de vista de Kai, Damon, Will e Michael.", preco: 50.12, altor:"Edição Português | por Penelope Douglas"  },


  { id: 7, image: "", nome: "", descricao:"", preco: "", altor:""  },


  { id: 8, image: "", nome: "", descricao:"", preco: "", altor:""  },


  { id: 9, image: "", nome: "", descricao:"", preco: "", altor:""  },


  { id: 10, image: "", nome: "", descricao:"", preco: "", altor:""  },
];

function buscarProdutoPorID(id){
    const produto = produtos.find(produto => produto.id == id);
    return produto || null
   }
   
app.get('/', (req, res) => {
  res.render('index', {produtos});
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Darck Book' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});