// Simule um objeto com as notas dos alunos
const notas = [
    {disciplina: 'Conceitos de Programação', nota: 10 },
    {disciplina: 'Introdução à Linguagem Java', nota: 10 },
    {disciplina: 'Estrutura Sequencial', nota: 10 },
    {disciplina: 'Estrutura Condicional', nota: 10 },
    {disciplina: 'Estruturas Repetitivas', nota: 10 },
    {disciplina: 'Introdução à Programação OO', nota: 10 },
    {disciplina: 'Bônus-Nivelamento sobre Git e Github', nota: 10 },
    {disciplina: 'Interface Gráfica com JavaFX', nota: 10 },

    // Adicione mais notas conforme necessário
];

// Função para adicionar notas à tabela
function adicionarNotas() {
    const boletimBody = document.getElementById('boletim-body');

    notas.forEach(nota => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nota.disciplina}</td>
            <td>${nota.nota}</td>
        `;
        boletimBody.appendChild(row);
    });
}

// Chame a função para exibir as notas ao carregar a página
window.onload = adicionarNotas;
