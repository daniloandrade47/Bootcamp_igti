/*
 * Atividade:__Desafio - Módulo 1
 * Bootcamp:___IGTI - Dev. Full Stack
 * Aluno:______Danilo S. Andrade
 * Data:_______29/09/2020
 */

// Declarando os estados das variáveis de escopo global
let tabAllUsers = null;
let countManSex = 0;
let countWomanSex = 0;
let totalAge = 0;
let totalAvgAges = 0;
let countUser = 0;
let allUsers = [];
let newAllUsers = [];
let btnSearch = null;
let inputSearch = null;
//let numberFormat = null;

// Startando a DOM e buscando seus elementos
window.addEventListener('load', () => {
  tabAllUsers = document.querySelector('#tabAllUsers');
  countManSex = document.querySelector('#sex-man');
  countWomanSex = document.querySelector('#sex-woman');
  totalAges = document.querySelector('#sum-ages');
  totalAvgAges = document.querySelector('#avg-ages');
  countUser = document.querySelector('#countUsers');
  btnSearch = document.querySelector('#btnSearch');
  inputSearch = document.querySelector('#inputSearch');
  //numberFormat = Intl.NumberFormat('pt-BR');

  // Função keyup, usada para buscar os usuários pelo nome
  inputSearch.addEventListener('keyup', searchByName);

  // Chamada a função que carrega a DOM com os dados dad API
  fetchUsers();
});

// Outra forma de escrever a função fetchUsers
// Escrita assíncrona e função assícrona
/* function fetchUsers() {
  fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo')
    .then((res) => res.json())
    .then((json) => {
      searchPeople = json;
      console.log(searchPeople);
    });
} */

// Escrita da função de forma mais elegante, usando async/await
async function fetchUsers() {
  //prettier-ignore
  const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
  const json = await res.json();
  allUsers = json.results.map((user) => {
    const { name, dob, gender, picture } = user;

    return {
      nome: name.first + ' ' + name.last,
      idade: dob.age,
      //formattedAge: formatNumber(dob.age),
      sexo: gender,
      img: picture.thumbnail,
    };
  });
  newAllUsers = allUsers;
  render();
}

const searchByName = () => {
  // Função que busca os usuários pelo nome.
  let filtered = inputSearch.value;
  newAllUsers = allUsers.filter((user) =>
    user.nome.toLowerCase().includes(filtered.toLowerCase())
  );
  render();
};

// iniciando a função render com chamadas a outras funções
function render() {
  renderSearchPeople();
  renderStatistic();
}

// função para renderizar os usuários em tela
function renderSearchPeople() {
  // ordenando os nomes em ordem crescente
  newAllUsers = newAllUsers.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  // renderizando os dados em tela
  let usersHTML = '<div>';

  // destruct
  newAllUsers.forEach((user) => {
    const { nome, idade, sexo, img } = user;

    const userHTML = `
    <div class='user'>
    <div>
    <img src="${img}" alt="${name}" class="add"/>        
    </div>
      <div>
          <ul>
            <li>${nome},&nbsp ${idade}</li>
            </ul>
      </div>      
    </div>
    `;

    usersHTML += userHTML;
  });

  usersHTML += '</div>';

  tabAllUsers.innerHTML = usersHTML;
}

/*
 * Função para calcular as diversas estatísticas
 */
const renderStatistic = () => {
  // Variável que receberá o tamanho do array de todos usuarios (filtrados ou não)
  const qttUsersShow = newAllUsers.length;
  // Exibe no campo mapeado na DOM
  countUser.innerHTML = qttUsersShow;

  // Cálcula a soma total de idades e exibe na DOM
  const sumAge = newAllUsers.reduce((acc, curr) => {
    return acc + curr.idade;
  }, 0);

  totalAges.innerHTML = sumAge;

  // Cálculo da média total de idades e exibição na DOM
  const avgAge = sumAge / newAllUsers.length;
  totalAvgAges.innerHTML = avgAge.toFixed(2);

  // Exibe a quantidade de usuários masculinos
  const userMan = newAllUsers.filter((user) => user.sexo === 'male');
  countManSex.innerHTML = userMan.length;

  // Exibe a quantidade de usuários femininos
  const userWoman = newAllUsers.filter((user) => user.sexo === 'female');
  countWomanSex.innerHTML = userWoman.length;
};
