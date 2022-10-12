import Burguer from "../public/Burguer.png";
import KenzieHub from "../public/KenzieHub.png";
import NuKenzie from "../public/NuKenzie.png";
import Ricky from "../public/ricky.png";

const projetos = [
  {
    title: "Nu Kenzie",
    description:
      "O Nu Kenzie e uma aplicação para controle de gastos, onde o usúario cadastra suas entradas e despesas.",
    framework: "Made with ReactJS",
    deploy: "https://react-entrega-s1-nu-kenzie-mathsudre.vercel.app/",
    src: NuKenzie,
  },
  {
    title: "Ricky and Morty",
    description: "Consumindo API de Ricky and Morty.",
    framework: "Made with ReactJS/Vite",
    deploy:
      "https://react-atividade-s1-buscando-dados-na-api-rick-and-75wr2nht0.vercel.app/",
    src: Ricky,
  },
  {
    title: "Burguer Kenzie",
    description:
      "O Burguer Kenzie e um layout de um e-commerce referente a um fast-food fictício, onde simulamos um carrinho de compra e uma barra de pesquisa de produtos.",
    framework: "Made with ReactJS/Vite",
    deploy:
      "https://react-entrega-s1-hamburgueria-da-kenzie-mathsudre.vercel.app/",
    src: Burguer,
  },
  {
    title: "Kenzie Hub",
    description:
      "O Kenzie Hub e um CRUD, onde consumindo uma API fornecida pela própria kenzie, o usuário e capaz de se cadastrar e logar na aplicação, editar e excluir suas stacks.",
    framework: "Made with ReactJS",
    deploy:
      "https://react-entrega-s2-formulario-de-cadastro-mathsudre.vercel.app/",
    src: KenzieHub,
  },
];

export default projetos;
