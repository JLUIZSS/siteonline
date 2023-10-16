

        // Dados fictícios dos alunos (você pode substituir por seus próprios dados)
        const alunos = [
            { nome: "Julio Luiz", idade: 21 },
            { nome: "Rodrigo Morais", idade: 35 },
            { nome: "Maria Clara", idade: 20 },
            { nome: "Miguel Caetano", idade: 23 },
        ];

        // Função para adicionar alunos à lista
        function adicionarAluno(nome, idade) {
            const lista = document.getElementById("alunos-lista");
            const novoAluno = document.createElement("li");
            novoAluno.innerHTML = `<strong>${nome}</strong> - ${idade} anos`;
            lista.appendChild(novoAluno);
        }

        // Loop para adicionar os alunos à lista
        for (const aluno of alunos) {
            adicionarAluno(aluno.nome, aluno.idade);
        }
