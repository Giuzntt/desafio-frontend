# 1) Desafio - Finalizado

### 1.1 - Separando os recursos que iremos utilizar para criar o nosso site, seguindo o [layout](https://www.figma.com/file/bVq19HGbDCOCScIwLIBnbp/Teste-t%C3%A9cnico?node-id=0%3A1) e extraindo os recursos essenciais do nosso Wireframe.

### 1.2 - Começamos o projeto arrumando problema ao importar a fonte Poppins no Projeto. Arrumando a arquitetura do NextJS, seguindo a documentação, criamos um arquivo _document.tsx . Para saber mais https://nextjs.org/docs/messages/no-stylesheets-in-head-component


### 1.3 - Preparando rotas da API do projeto, criando nosso primeiro componente utilizando a lib de UI - Stitches , recomendada pela empresa Intrabank. Incluindo uma tag no "_document.tsx" para evitar que o CSS da página saia, caso o JavaScript esteja desativado no navegador. Pode ser encontrado na linha 16 do _document.tsx

### 1.4 - Padronizando os inputs de acordo com [layout](https://www.figma.com/file/bVq19HGbDCOCScIwLIBnbp/Teste-t%C3%A9cnico?node-id=0%3A1) do figma, configurando arquitetura do Stitches/Pattern, construindo telas de Cadastro de formulário/Feedback Usuário Cadastrado. 

### 1.5 - Validando campos com Expressões Regulares, Finalizando as Telas, Criando Usuário com  a API. Seguindo padronização de diretório do projeto.  Realocamos os estilos globais para fora do MyApp, pois tudo que estiver dentro do MyApp executa novamente.

### 1.6 Finalizando integração entre ambas telas, responsividade das Telas, Cadastro de Usuário já disponível.

##### Para criar  o usuário na aplicação, lembrando que foi criado nos campos a máscara solicitada pela empresa:

   ```
POST /user
{
            firstName: "Elon",
            lastName: "Musk",
            email: "elonmusk@email.com",
            password: "elon$%el6789",
            country: "Estados Unidos",
            dateOfBirthday: '1971-06-21',
            bio: 'Elon Musk CEO',
            receiveNotifications: true

}
```

### Finalizando projeto, demanas cumpridas de acordo com Wireframe!






### Finalizando Tela de Feedback com API Integrada.

