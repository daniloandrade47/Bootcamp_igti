# Desafio

## Módulo 1 - Fundamentos do Bootcamp

### Objetivos

Exercitar os seguintes conceitos trabalhados no Módulo:

Exercitar os seguintes conceitos trabalhados no Módulo:

- [:heavy_check_mark:] Declarar elementos HTML como títulos, input, div, span, ul, li etc.
- [:heavy_check_mark:] Estilizar o app com CSS.
- [:heavy_check_mark:] Mapear elementos do DOM para serem manipulados com JavaScript.
- [:heavy_check_mark:] Formatar valores com JavaScript.
- [:heavy_check_mark:] Realizar diversos cálculos com array methods como map, filter e reduce.
- [:heavy_check_mark:] Realizar requisições HTTP com o comando fetch

---

:cyclone: Enunciado do exercício

Criar uma aplicação para filtrar usuários e mostrar estatísticas a partir do filtro definido

---

Os alunos deverão desempenhar as seguintes atividades:

Os alunos deverão desempenhar as seguintes atividades:

1. Na carga inicial da aplicação, obter os dados de: https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo
2. Carregar os dados dos usuários em um array.
3. Permitir a filtragem de usuários através de um input com interação do usuário.
4. O usuário poderá filtrar dados quando digitar pelo menos um caractere no input.
5. O usuário poderá filtrar os dados tanto digitando "Enter" quanto clicando no botão correspondente, conforme imagens mais abaixo.
6. Montar dois painéis.
7. No painel da esquerda, listar os usuários filtrados.
8. No painel da direita, calcular e mostrar algumas estatísticas sobre esses usuários, conforme imagens abaixo.

---

### Dicas

- [:heavy_check_mark:] Após executar a requisição à API, obtenha somente os dados necessários ao app. Esses são: name (first + last), picture, dob.age e gender.
- [:heavy_check_mark:] Monitore o input com o evento "keyup".
- [:heavy_check_mark:] Filtrem os dados a partir de qualquer posição no nome, ou seja, o nome "Brenda" (caso exista na API) deve ser retornado se o filtro for "enda".
- [:heavy_check_mark:] Para filtrar, considere todo o texto em minúsculas. Assim, o filtro "E" trará tanto "Elena" quanto "Helena", caso existam na API.
- [:heavy_check_mark:] Não faça a “limpeza” do texto, ou seja, devem ser considerados os acentos e caracteres especiais. Portanto, o texto "Andre" não pode filtrar o nome “André”.
- [:heavy_check_mark:] Dê um console.log() nos dados do evento de digitação e você descobrirá como "cercar" a tecla "Enter".
- [:heavy_check_mark:] Foque mais no código JavaScript e menos na interface. O mais importante é que o filtro e os cálculos estejam corretos.
- [:heavy_check_mark:] Quebre o seu código em funções bem definidas.
- [:heavy_check_mark:] Será necessária uma boa dose de manipulação manual do DOM. Isso pode ser feito tanto com innerHTML + string (recomendo a utilização de template literals) ou com os comandos document.createElement, appendChild, etc.
- [:heavy_check_mark:] Se quiser fazer uma interface semelhante à das imagens, utilize o Materialize (https://materializecss.com).
- [:heavy_check_mark:] Não deixe de assistir o vídeo desse desafio, onde demonstro a aplicação em funcionamento e dou mais algumas dicas.
