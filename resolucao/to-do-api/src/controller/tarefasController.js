const tarefas = require("../model/tarefas.json");

const getAll = (request, response) => {
  console.log(req.url);
  res.status(200).send(tarefas);
};

const getById = (request, response) => {
  const id = req.params.id;
  if (id > 17 || id <= 0) {
    res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack");
  }
  res.status(200).send(tarefas.find(tarefa => tarefa.id == id));
};

const getByNomeColaborador = (request, response) => {
  const nome = req.params.nome;
  console.log(nome)
  res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador == nome));
};

const getConcluidos = (request, response) => {
  console.log(req.url);
  res.status(200).send(
    tarefas.filter(tarefa => {
      return tarefa.concluido === "true";
    })
  );
};

const getTempoTarefa = (request, response) => {
  tarefas.forEach(tarefa => {
    console.log(tarefa)
    tarefa.tempoDecorrido = diferencaDias(
      conversorData(tarefa.dataInclusao),
      conversorData(tarefa.dataConclusao)
    )
  })

  response.status(200).send(tarefas)
}

const conversorData = (dataString) => {
  const dia = dataString.split("/")[0]
  const mes = dataString.split("/")[1] - 1
  const ano = dataString.split("/")[2]

  const dataFormatada = new Date(ano, mes, dia)
  return dataFormatada
}

const diferencaDias = (dataInicial, dataFinal) => {
  const diferencaTempo = Math.abs(dataFinal - dataInicial)
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24))
  return diferencaDias
}

module.exports = {
  getAll,
  getById,
  getByNomeColaborador,
  getConcluidos,
  getTempoTarefa
}

