use 'movies-service';

db.movies.insert([{
  titulo: "Os Vingadores: Guerra Infinita",
  sinopse: "Os heróis mais poderosos da Marvel enfrentando o Thanos",
  duracao: 120,
  dataLancamento: ISODate("2018-05-01T00:00:00Z"),
  imagem: "http://www.luiztools.com.br/vingadores-gi.jpg",
  categorias: ["Aventura", "Ação"]
},
{
  titulo: "Os Vingadores: Era de Ultron",
  sinopse: "Os heróis mais poderosos da Marvel enfrentando o Ultron",
  duracao: 110,
  dataLancamento: ISODate("2016-05-01T00:00:00Z"),
  imagem: "http://www.luiztools.com.br/vingadores-eu.jpg",
  categorias: ["Aventura", "Ação"]
},
{
  titulo: "Os Vingadores",
  sinopse: "Os heróis mais poderosos da Marvel enfrentando o Loki",
  duracao: 100,
  dataLancamento: ISODate("2014-05-01T00:00:00Z"),
  imagem: "http://www.luiztools.com.br/vingadores.jpg",
  categorias: ["Aventura", "Ação"]
}]);