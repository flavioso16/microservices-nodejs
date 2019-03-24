use 'cinema-catalog-service';

db.cinemaCatalog.insert([
  {
    cidade: "Gravataí",
    uf: "RS",
    cinemas: []
  },
  {
    cidade: "Porto Alegre",
    uf: "RS",
    pais: "BR",
    cinemas: [
      {
        _id: ObjectId(),
        nome: "Cinemark Bourbon Ipiranga",
        salas: [
          {
            nome: 1,
            sessoes: [
              {
                data: ISODate("2018-06-01T09:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e57"),
                filme: "Vingadores: Guerra Infinita",
                valor: 25.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: false },
                ]
              },
              {
                data: ISODate("2018-06-01T11:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e57"),
                filme: "Vingadores: Guerra Infinita",
                valor: 25.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: true },
                ]
              },
              {
                data: ISODate("2018-06-01T13:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                filme: "Vingadores: Era de Ultron",
                valor: 20.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: false },
                  { numero: 2, disponivel: true },
                ]
              }
            ]
          },
          {
            nome: 2,
            sessoes: [
              {
                data: ISODate("2018-06-01T09:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                filme: "Vingadores: Era de Ultron",
                valor: 25.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: false },
                ]
              },
              {
                data: ISODate("2018-06-01T11:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                filme: "Vingadores: Era de Ultron",
                valor: 25.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: true },
                ]
              },
              {
                data: ISODate("2018-06-01T13:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                filme: "Vingadores: Era de Ultron",
                valor: 20.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: false },
                  { numero: 2, disponivel: true },
                ]
              }
            ]
          }
        ]
      },
      {
        _id: ObjectId(),
        nome: "GNC Lindóia",
        salas: [
          {
            nome: 100,
            sessoes: [
              {
                data: ISODate("2018-06-01T09:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e59"),
                filme: "Os Vingadores",
                valor: 25.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: false },
                ]
              },
              {
                data: ISODate("2018-06-01T11:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e59"),
                filme: "Os Vingadores",
                valor: 25.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: true },
                ]
              },
              {
                data: ISODate("2018-06-01T13:00:00Z"),
                idFilme: ObjectId("5aefc5029ce83b1eb6b89e58"),
                filme: "Vingadores: Era de Ultron",
                valor: 20.00,
                assentos: [
                  { numero: 1, disponivel: true },
                  { numero: 2, disponivel: false },
                  { numero: 2, disponivel: true },
                ]
              }
            ]
          }
        ]
      }
    ]
  }]);