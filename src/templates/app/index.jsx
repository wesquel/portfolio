/* eslint-disable prettier/prettier */
//import Home from "./templates/App";
import { NavBar } from "../../components/Navbar";
import { TitleComponent } from "../../components/TitleComponent";
import { SectionContainer } from "../../components/SectionContainer";
import { TextComponent } from "../../components/TextComponent";
import { ImageUser } from "../../components/ImageUser";
import { Signature } from "../../components/Signature";
import { Colunas } from '../../components/Colunas';

function Home() {
  const links = [
    {
      children: "Inicio",
      link: "#target1",
      newTab: false,
    },
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
    <>
        <SectionContainer>
            <NavBar links={links}>children</NavBar>

            <TitleComponent>Desenvolvedor</TitleComponent>

            <ImageUser text="imagem perfil" />

            <Signature>Weslley Carvalho</Signature>

            <TextComponent>Eu sou um apaixonado desenvolvedor de 22 anos que mergulhou fundo no mundo da tecnologia. Ao longo da minha jornada, tenho me concentrado principalmente no desenvolvimento backend, com ênfase em tecnologias como Java, Spring e a orquestração eficaz de bancos de dados. No entanto, quero enfatizar que meu repertório é diversificado e não se limita somente ao backend.</TextComponent>

            <TitleComponent>Meu Foco e Habilidades:</TitleComponent>

            <TextComponent>
            <span className='bold'>Backend Afiado:</span> Minha jornada no desenvolvimento começou com o backend, onde meu domínio se estende ao Java e Spring. Construo sistemas backend eficientes e escaláveis, focando na performance e no código limpo.
            </TextComponent>

            <TextComponent>
            <span className='bold'>Frontend Versátil:</span> Embora meu foco principal seja o backend, não sou um estranho no mundo frontend. Tenho habilidades sólidas em HTML, CSS e JavaScript, permitindo-me criar interfaces de usuário envolventes e responsivas.
            </TextComponent>

            <TextComponent>
            <span className='bold'>Testes e Qualidade:</span> Acredito que um código sólido é testado e confiável. Adoto práticas de teste abrangentes para garantir a qualidade de cada solução que construo.

            </TextComponent>

            <TextComponent>
            <span className="bold">Fusão de Inovação e Fundamentos:</span> Não só busco a inovação, mas também compreendo a importância dos fundamentos sólidos. Crio soluções que são inovadoras e eficazes, sem complicar desnecessariamente.
            </TextComponent>

            <TitleComponent>Projetos:</TitleComponent>

        <Colunas/>

        </SectionContainer>
    
        

    </>
  );
}

export default Home;
