<h1 align="center">🛒 eBay Clone</h1>

<img src="./public/images/ebay.gif" alt="Image description">

🔎 O eBay Clone é um sistema de compras ultilizado por usuários de diversas partes do mundo e permite que indivíduos e empresas comprem e vendam uma ampla variedade de produtos e serviços online.

## :page_facing_up: Explicação

O projeto foi realizado utilizando o framework [Nextjs](https://nextjs.org/) conectando-se ao [Supabases](https://supabase.com/) que ajudou na autenticação, registro, login e persistência de dados.

🎲 **Como o projeto funciona**

Serve como uma plataforma de compras que disponibiliza diversos produtos aos usuários, possuindo algumas funcionalidades, como, por exemplo, de adicionar ao carrinho de compras, fazer login, registrar endereço da para a compra, ver as compras efetuadas, etc.

Caso o usuário queira realizar uma compra. Ele precisa:

- Fazer o login e esta autenticado.
- Adicionar o item ao carrinho de compras
- Ir para o checkout
- Colocar os dados do cartão e confirmar o pagamento

⚠️ **Notas**

O visitante não terá acesso a rotas privadas. Se você não se registrou ou fez login no site. Portanto, sempre que ele tentar acessar a URL sem estar cadastrado/logado, ele será redirecionado para a página inicial.

## 📁 Páginas

O site possui um total de 8 páginas, que são:

- **Auth:** A página para fazer login e acessar o site.
- **Page:** A página que disponibiliza todos os produtos.
- **Product:** A página amostra os dados do produto e adicionar e remover do carrinho.
- **Cart:** A página demostra todos os items no carrinho e compras.
- **Address:** A página registrar o endereço do usuário.
- **Checkout (Private):** A página oferece todos os dados das compras, todos os items selecionado o valor indivídual de cada item e o total de todos e o input para o cartão de pagamento.
- **Success (Private):** A página exibe o sucesso da compra.
- **Orders (Private):** A página disponibiliza todos os dados das compras efetuadas.

## 🚀 Tecnologias

- [NextJs](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Supabase](https://supabase.com/)
- [Stripe](https://stripe.com/br?utm_campaign=BR_en_Search_Brand_Brand_EXA-15928713321&utm_medium=cpc&utm_source=google&ad_content=575905716902&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=Cj0KCQjw_5unBhCMARIsACZyzS0PHnCVSHNAoq_ppo0EzFrA-W8wbbBnI04NcQ2ye3q-eBvkJcemNyIaArIoEALw_wcB)
- [Tailwindcss](https://tailwindcss.com/)
- [Autoprefixer](https://autoprefixer.github.io/pt-br/)
- [Debounce](https://www.freecodecamp.org/news/javascript-debounce-example/)
- [Moment](https://momentjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Resonsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [Rect toastify](https://fkhadra.github.io/react-toastify/introduction)

## :closed_book: Como usar?

Antes de começar, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados.

```bash
# Clone this project
$ git clone https://github.com/Thiagooffice/eBay.git

# access
$ cd eBay

# install dependencies
$ yarn or npm

# Run the project
$ yarn start or npm start

# The server will initialize in the <http://localhost:3000>
```

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/84478212?s=400&u=b003ad011d6337bf4a03b4aadde3d905bca5c9b8&v=4" width="160px;" alt="Photo by Thiago Leal on GitHub"/><br>
        <sub>
          <b>Thiago Leal de Souza</b>
        </sub>
      </a>
    </all>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.

&#xa0;

<a href="#top">Voltar ao topo</a>

