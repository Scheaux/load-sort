const table = document.getElementById('table');

const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

let sortId = 0;

function clearTable() {
  table.innerHTML = `
  <tr>
    <th scope="col">id</th>
    <th scope="col">title</th>
    <th scope="col">year</th>
    <th scope="col">imdb</th>
  </tr>
  `;
}

function sortBy() {
  const sortOrder = [
    'id', 'title', 'year', 'imdb',
  ];
  return sortOrder[sortId];
}

function sort() {
  const sorter = sortBy();
  if (sorter === 'title') data.sort((x, y) => x[sorter].localeCompare(y[sorter], 'ru'));
  else data.sort((a, b) => a[sorter] - b[sorter]);
  sortId += 1;
  if (sortId === 4) sortId = 0;
}

function render() {
  clearTable();
  sort();
  for (let i = 0; i < data.length; i += 1) {
    table.innerHTML += `
    <tr>
    <th scope="col">${data[i].id}</th>
    <th scope="col">${data[i].title}</th>
    <th scope="col">${data[i].year}</th>
    <th scope="col">${data[i].imdb}</th>
    </tr>
    `;
  }
}

render();

setInterval(() => render(), 2000);
