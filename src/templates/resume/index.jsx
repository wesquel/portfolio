import { NavBar } from "../../components/Navbar";
import { SectionContainer } from "../../components/SectionContainer";
import { TextComponent } from "../../components/TextComponent";
import { TitleComponent } from "../../components/TitleComponent";

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
      <TitleComponent>Weslley Addson</TitleComponent>
      <TextComponent>Desenvolvedor web</TextComponent>
    </SectionContainer>
  );
}

export default Resume;
