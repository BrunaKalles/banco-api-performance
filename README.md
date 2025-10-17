# 🧪 Testes de Performance com K6 - Banco API

Este repositório contém testes de **performance** desenvolvidos em **JavaScript** utilizando o **[K6](https://k6.io/)**.  
Os testes têm como objetivo validar o desempenho e a estabilidade da [API Banco](https://github.com/BrunaKalles/banco-api) sob diferentes cenários de carga e uso.

---

## 🚀 Introdução

Os testes de performance são fundamentais para garantir que uma API responda bem sob alta demanda.  
Com o K6, é possível medir **tempo de resposta**, **taxa de sucesso**, **throughput**, **falhas** e outros indicadores críticos de performance.

Este projeto foi desenvolvido para:

- Avaliar a **resiliência** e **escalabilidade** da API Banco.
- Automatizar execuções de carga com diferentes **cenários e configurações**.
- Gerar **relatórios em tempo real** e **exportáveis** para análise posterior.

---

## 🧰 Tecnologias Utilizadas

- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**
- **[K6](https://k6.io/docs/)** – Ferramenta de testes de carga e performance
- **Node.js** – Ambiente de execução
- **VS Code** (opcional) – Editor recomendado para desenvolvimento

---

## 🗂️ Estrutura do Repositório

```
banco-api-performance/
├── tests/
│   ├── login.test.js
│   ├── transferencia.test.js
├── utils/
│   └── variaveis.js
├── fixtures/
│   └── postLogin.json
├── config/
│   └── config.local.json
├── helpers/
│   └── autenticacao.js
├── .gitignore
└── README.md
```

---

## ⚙️ Instalação do Projeto

Antes de executar os testes, certifique-se de ter o **K6** instalado.  
A instalação pode ser feita diretamente via terminal:

### 🔧 Instalar o K6

#### **Windows (via Chocolatey)**
```bash
choco install k6
```

#### **macOS (via Homebrew)**
```bash
brew install k6
```

#### **Linux (via apt)**
```bash
sudo apt install k6
```

---

## ▶️ Execução dos Testes

1. **Clone o repositório**
   ```bash
   git clone https://github.com/BrunaKalles/banco-api-performance.git
   cd banco-api-performance
   ```

2. **Configure a variável de ambiente `BASE_URL`**

   Altere o arquivo 'config.local.json' e defina a URL base da API a ser testada.
   ```json
   {
      "baseUrl": "http://localhost:3000"
   }
   

3. **Execute o teste desejado**
   ```bash
   k6 run tests/transferencia.test.js
   ```

---

## 📊 Execução com Relatório em Tempo Real

Para acompanhar o **dashboard interativo** e exportar o relatório em HTML:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/transferencia.test.js -e BASE_URL=http://localhost:3000
```

- **K6_WEB_DASHBOARD=true** → habilita o dashboard em tempo real  
- **K6_WEB_DASHBOARD_EXPORT=html-report.html** → exporta o relatório para um arquivo HTML após a execução

Após o término, o arquivo `html-report.html` estará disponível no diretório raiz do projeto e pode ser aberto no navegador para análise detalhada dos resultados.

---

## 📘 Referências

- [Documentação oficial do K6](https://k6.io/docs/)
- [Repositório da API Banco](https://github.com/BrunaKalles/banco-api)

---

📄 **Autora:** [Bruna Kalles](https://github.com/BrunaKalles)  
🕒 **Licença:** MIT  
📅 **Última atualização:** Outubro/2025
