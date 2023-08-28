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
      <ResumeComponent title="Contatos 📲" italic={true}>
        <div>
          <p className="containerText">
            +55 (83) 9 99413-7970
            <br />
            weslleyaddson0@gmail.com
            <br />
            <a href="https://www.linkedin.com/in/weslley-addson-2a3131204/" target="_blank" rel="noreferrer">
              Linkedin
            </a>
            <br />
            <a href="https://github.com/wesquel" target="_blank" rel="noreferrer">
              Github
            </a>
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
          <p className="containerText">
            <a href="assets/images/historico.png" target="blank">
              Bacharelado em Engenharia da Computação
            </a>
          </p>
          <p className="date date-intern">01/2019 - Em andamento</p>
          <p className="containerText">
            <a href="assets/certificate/git.pdf" target="_blank">
              Minicurso - Uso de Git e Github para controle de versão de projetos de software
            </a>
          </p>
          <p className="date date-intern">10/2019</p>
        </div>

        <div>
          <h3>Cisco</h3>
          <p className="containerText">
            <a href="assets/certificate/cyber_security_essentials.pdf" target="_blank">
              Cybersecurity Essentials
            </a>
          </p>
          <p className="date date-intern">01/2021 - 03/2021</p>
        </div>

        <div>
          <h3>Udemy</h3>
          <p className="containerText">
            <a href="assets/certificate/udemyJava.pdf" target="_blank">
              Rest APIs RestFul do 0 à AWS com Spring Boot 3 Java e Docker
            </a>
          </p>
          <p className="date date-intern">12/2022 - 01/2023</p>
        </div>

        <div>
          <h3>SCRUMstudy</h3>
          <p className="containerText">
            <a href="assets/certificate/scrum.pdf" target="_blank">
              Scrum Fundamentals
            </a>
          </p>
          <p className="date date-intern">01/2023 - 02/2023</p>
        </div>
        <div>
          <h3>Six Sigma</h3>
          <p className="containerText">
            <a href="assets/certificate/six_sigma.pdf" target="_blank">
              Six Sigma White Belt
            </a>
          </p>
          <p className="date date-intern">06/2023 - 07/2023</p>
        </div>
      </ResumeComponent>
      <ResumeComponent title="Habilidades 🏅">
        <div>
          <h3>Linguagens</h3>
          <p className="containerText">Português (Nativo), Inglês (Intermediário)</p>
        </div>

        <div>
          <h3>Linguagens de Programação</h3>
          <p className="containerText">Java, C, Python, PHP, JavaScript</p>
        </div>

        <div>
          <h3>Serviços</h3>
          <p className="containerText">Docker, Postgress, Github Actions, AWS</p>
        </div>

        <div>
          <h3>Framework e Bibliotecas</h3>
          <p className="containerText">Spring Framework, Laravel, Esp-idf</p>
        </div>

        <div className="final-div">
          <h3>Sistemas</h3>
          <p className="containerText">VSCode, IntelliJ IDEA, Pycharm, Jupyter Notebook, Github, Windwons, Linux</p>
        </div>
      </ResumeComponent>
    </SectionContainer>
  );
}

export default Resume;
