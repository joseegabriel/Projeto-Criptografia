const skills = document.querySelectorAll(".title")

const content = document.querySelector('.conteudo');

const description = [
    '<h2>Cifra de César</h2> <p>&nbsp;&nbsp;É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes.</p>',
    '<h2>Base64</h2> <p>&nbsp;&nbsp;Base64 é um algoritmo de codificação (encoding) que permite transformar qualquer caractere de qualquer idioma em um alfabeto que consiste em letras latinas, dígitos e sinais.</p>',
]

skills.forEach((elemento, index) => {
    elemento.addEventListener('mouseover', () => content.innerHTML = `${description[index]}`)
    elemento.addEventListener('mouseout', () => content.innerHTML = 'Coloque o mouse por cima para ler a descrição')
});