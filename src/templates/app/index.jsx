import { NavBar } from '../../components/Navbar';
import { TitleComponent } from '../../components/TitleComponent';
import { SectionContainer } from '../../components/SectionContainer';
import { TextComponent } from '../../components/TextComponent';
import { ProjectsTable } from '../../components/ProjectsTable';
import { Presentation } from '../../components/Presentation';

function Home() {
  const links = [
    {
      children: 'Home',
      link: '/',
      newTab: false,
    },
    {
      children: 'Curriculo',
      link: '/resume',
      newTab: false,
    },
  ];

  return (
    <>
      <SectionContainer centered="true">
        <NavBar links={links}>children</NavBar>

        <Presentation>Me chamo Weslley Carvalho</Presentation>

        {/* <ImageUser text="imagem perfil" />

            <Signature>Weslley Carvalho</Signature> */}

        <TextComponent>
          Eu sou um apaixonado desenvolvedor de 22 anos que mergulhou fundo no mundo da tecnologia. Ao longo da minha
          jornada, tenho me concentrado principalmente no desenvolvimento backend, com ênfase em tecnologias como Java,
          Spring e a orquestração eficaz de bancos de dados. No entanto, quero enfatizar que meu repertório é
          diversificado e não se limita somente ao backend.
        </TextComponent>

        <TitleComponent>Meu Foco e Habilidades:</TitleComponent>

        <TextComponent>
          <span className="bold">Back-end Afiado:</span> Minha jornada no desenvolvimento começou com o back-end, onde meu
          domínio se estende ao Java e Spring. Tenho uma sólida experiência na construção de sistemas back-end eficientes
          e escaláveis, utilizando as melhores práticas de desenvolvimento. Meu foco na performance se reflete na
          otimização cuidadosa de consultas de banco de dados e no uso eficiente de recursos do servidor. Além disso,
          tenho um compromisso inabalável com o código limpo, seguindo padrões de codificação rigorosos e mantendo um
          alto nível de legibilidade e manutenção em todos os meus projetos
        </TextComponent>

        <TextComponent>
          <span className="bold">Front-end Versátil:</span> Embora meu foco principal seja o back-end, não sou um estranho
          no mundo front-end. Tenho habilidades sólidas em HTML, CSS e JavaScript, incluindo experiência em React, o que
          me permite criar interfaces de usuário envolventes e responsivas.
        </TextComponent>

        <TextComponent>
          <span className="bold">Testes e Qualidade:</span> Acredito que um código sólido é testado e confiável. Adoto
          práticas de teste abrangentes para garantir a qualidade de cada solução que construo.
        </TextComponent>

        <TextComponent>
          <span className="bold">Fusão de Inovação e Fundamentos:</span> Não só busco a inovação, mas também compreendo
          a importância dos fundamentos sólidos. Crio soluções que são inovadoras e eficazes, sem complicar
          desnecessariamente.
        </TextComponent>

        <TitleComponent>Projetos:</TitleComponent>

        <div className="finaly"></div>
      </SectionContainer>

      <SectionContainer>
        <ProjectsTable />
      </SectionContainer>
    </>
  );
}

export default Home;
