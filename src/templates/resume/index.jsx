import { NavBar } from "../../components/Navbar";
import { ResumeComponent } from "../../components/ResumeComponent";
import { ResumeDescriptionComponent } from "../../components/ResumeDescriptionComponent";
import { ResumeTitleComponent } from "../../components/ResumeTitleComponent";
import { SectionContainer } from "../../components/SectionContainer";

function Resume() {
  const links = [
    {
      children: "Sobre min",
      link: "#target2",
      newTab: false,
    },
    {
      children: "Habilidades",
      link: "#target3",
      newTab: false,
    },
    {
      children: "Projetos",
      link: "#target4",
      newTab: false,
    },
  ];
  return (
    <SectionContainer centered="true">
      <NavBar links={links}>children</NavBar>
      <ResumeTitleComponent>Weslley Addson Silva de Carvalho</ResumeTitleComponent>
      <ResumeDescriptionComponent>Desenvolvedor Web</ResumeDescriptionComponent>
      <ResumeComponent title="Endereço 📍" italic={true}>
        <div className="containerText">
          Campina Grande - PB{" "}
          <span>
            <img src="assets/images/paraiba.png"></img>
          </span>
          <p>
            Brasil{"      "}
            <span>
              <img src="assets/images/Flag_of_Brazil.png"></img>
            </span>
          </p>
        </div>
      </ResumeComponent>
      <ResumeComponent title="Sobre min 👨‍💻">
        <p className="containerText">
          Meu fascínio pela tecnologia teve início aos meus 8 anos de idade, quando o computador de casa quebrou.
          Decidi, na época, tentar consertá-lo por conta própria, e como era de se esperar, não obtive muito sucesso. No
          entanto, em vez de desistir, persisti e continuei a evoluir. Foi nesse momento que dei os primeiros passos no
          mundo da programação, com apenas 12 anos, criando meu primeiro código para um servidor de Tibia. <br />
          <br /> Desde então, minha jornada tem sido uma constante busca pelo aprendizado e crescimento. Em 2020,
          mergulhei de cabeça no desenvolvimento web, e todos os dias me dedico a aprender algo novo. Colaborei em
          diversos projetos durante minha formação e, sempre que possível, busco desenvolver projetos pessoais com
          tecnologias que ainda desconheço.
          <br />
          <br /> Estou atualmente em busca de minha primeira oportunidade de emprego na área, confiante de que tenho
          todas as habilidades necessárias para atuar com sucesso. Minha paixão pela tecnologia e minha disposição para
          aprender continuamente impulsionam minha jornada profissional, e estou ansioso para as oportunidades e
          desafios que o futuro reserva.
        </p>
      </ResumeComponent>
      <ResumeComponent title="Experiência ⌛">
        <div>
          <h3>Desenvolvedor Backend Java - IFPB</h3>
          <p className="date">03/2023 - Em andamento</p>
          <p className="containerText">
            Atualmente, estou trabalhando em um projeto do IFPB como desenvolvedor backend, utilizando Java, Spring,
            Banco de Dados MySQL e utilizando a ferramenta Trello para organização de tarefas.
          </p>
        </div>
        <div>
          <h3>Desenvolvedor Full Stack PHP - IFPB</h3>
          <p className="date">04/2022 - 12/2022</p>
          <p className="containerText">
            Junto com uma equipe, desenvolvi uma plataforma de estágio para o Instituto Federal da Paraíba, utilizando o
            padrão MVC (Model-View-Controller), PHP e Laravel, além de HTML, CSS, JavaScript e o banco de dados MySQL
          </p>
        </div>
      </ResumeComponent>
      <ResumeComponent title="Educação 📖">
        <div>
          <h3>Instituto Federal de Educação, Ciência e Tecnologia da Paraíba - IFPB</h3>
          <p className="containerText">Bacharel em Engenharia da Computação 01/2019 - 12/2023</p>
          <p className="containerText">
            Minicurso - Uso de Git e Github para controle de versão de projetos de software - 10/2019
          </p>
        </div>

        <div>
          <h3>Udemy</h3>
          <p className="containerText">
            Rest APIs RestFul do 0 à AWS com Spring Boot 3 Java e Docker 11/2022 - 01/2023
          </p>
        </div>
      </ResumeComponent>
      <ResumeComponent title="Habilidades 🏅"></ResumeComponent>
    </SectionContainer>
  );
}

export default Resume;
