// Mock data para fallback quando a API estiver indisponível

export const loterias = [
  { id: 0, nome: "mega-sena" },
  { id: 1, nome: "quina" },
  { id: 2, nome: "lotofácil" },
  { id: 3, nome: "lotomania" },
  { id: 4, nome: "timemania" },
  { id: 5, nome: "dia de sorte" }
];

export const loteriasConcursos = [
  { loteriaId: 0, concursoId: 2359 },
  { loteriaId: 1, concursoId: 5765 },
  { loteriaId: 2, concursoId: 2412 },
  { loteriaId: 3, concursoId: 2268 },
  { loteriaId: 4, concursoId: 1723 },
  { loteriaId: 5, concursoId: 539 }
];

export const concursos = {
  2359: {
    id: "2359",
    loteria: 0,
    numeros: ["03", "12", "24", "36", "45", "58"],
    data: "2021-04-17T00:00:00.000Z"
  },
  5765: {
    id: "5765",
    loteria: 1,
    numeros: ["07", "14", "28", "55", "73"],
    data: "2021-04-16T00:00:00.000Z"
  },
  2412: {
    id: "2412",
    loteria: 2,
    numeros: ["01", "02", "03", "05", "06", "07", "09", "10", "12", "13", "14", "17", "19", "22", "25"],
    data: "2021-04-16T00:00:00.000Z"
  },
  2268: {
    id: "2268",
    loteria: 3,
    numeros: ["02", "05", "08", "17", "23", "28", "31", "38", "46", "49", "51", "55", "62", "71", "72", "78", "84", "87", "91", "95"],
    data: "2021-04-16T00:00:00.000Z"
  },
  1723: {
    id: "1723",
    loteria: 4,
    numeros: ["14", "27", "38", "45", "56", "63", "78"],
    data: "2021-04-15T00:00:00.000Z"
  },
  539: {
    id: "539",
    loteria: 5,
    numeros: ["04", "07", "11", "15", "23", "28", "31"],
    data: "2021-04-15T00:00:00.000Z"
  }
};

export default {
  loterias,
  loteriasConcursos,
  concursos
};
