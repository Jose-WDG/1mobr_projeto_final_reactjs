import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SkillItem from './SkillItem';

const FreelancerListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const FreelancerCard = styled.li`
  border-radius: 0.5rem;
  background-color: var(--primary-color);
  padding: 20px;
  margin-bottom: 20px;
`;

const FreelancerName = styled.h3`
  color: var(--primary-text-color);
  margin-bottom: 10px;
`;

const FreelancerImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  margin-bottom: 10px;
`;

const FreelancerTechnologies = styled.p`
  color: var(--second-text-color);
  font-weight: bold;
  margin-bottom: 10px;
`;

const FreelancerRecentWork = styled.p`
  color: var(--second-text-color);
  margin-bottom: 0;
`;
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;
  margin: 5px;
  &:hover {
    background-color: #ffffff75;
    text-decoration: underline;
  }
`;

const FreelancerList = () => {
  const freelancers = [
    {
      id: 1,
      name: 'José Ramalho',
      photo: '/src/assets/foto-jose.jpg',
      technologies: [
        'Android', 'Java', 'Kotlin'
      ],
      biography: "Desenvolvedor mobile altamente experiente, com uma sólida formação em análise e desenvolvimento" +
        "de sistemas e 3 anos de experiência em desenvolvimento de aplicativos móveis." +

        "Meu foco principal é trabalhar com grandes corporações financeiras, criando aplicativos inovadores e" +
        "funcionais que atendam às necessidades específicas de seus clientes." +

        "Com um bom conhecimento em tecnologias móveis, sou capaz de criar aplicativos móveis" +
        "robustos e escaláveis. Conhecimentos em iOS e Android, estou sempre procurando maneiras de usar as tecnologias mais recentes para" +
        "aprimorar os projetos." +

        "Excelente comunicação e trabalho em estreita colaboração com minha equipe para garantir máxima qualidade." +
        "Comprometido em entregar projetos dentro do prazo." +

        "Quando não estou trabalhando, gosto de jogar video game e adoro viajar para novos lugares." +
        "Estou sempre procurando maneiras de crescer na minha carreira como desenvolvedor, buscando aprimorar" +
        "minhas habilidades e aprender novas tecnologias para fazer projetos de qualidade.",
      recentWork: 'BRQ digital solutions',
      contacts: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/jos%C3%A9-ramalho-8a1a07159/" },
        { name: "Github", url: "https://github.com/Jose-WDG" },
        { name: "BRQ digital solutions", url: "https://www.trakto.io" }
      ]
    },
    {
      id: 2,
      name: 'Felipe Araújo',
      photo: '/src/assets/foto-felipe.png',
      technologies: ['Swift', 'Dart', 'Fluter'],
      biography: "Sou desenvolvedor mobile a 6 anos e comecei trabalhando com o Ionic na sua primeira versão com javascript em 2017 e fiquei 2 anos trabalhando com o Ionic em angular ate a versão 4 do Ionic." +
        "Trabalho com Flutter atualmente na Trakto uma startup de design que esta a muitos anos no mercado, mas ja trabalhei com Swift, Java Android." +
        "Já trabalhei em inumeros projetos de backend, front e mobile." +
        "Tenho conhecimento básico em Devops e desenvolvimento Backend com Go, Python e Nodejs." +
        "Sou apaixonado por eletronica e iots e tenho varios projetos usando arduino.",
      recentWork: 'Trakto',
      contacts: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/felipe-costa-araújo-8804a3100/" },
        { name: "Github", url: "https://github.com/FelipeCostaAraujo" },
        { name: "Trakto", url: "https://www.trakto.io" }
      ]
    },
    // Add more freelancers as needed
  ];
  return (
    <FreelancerListContainer>
      {freelancers.map((freelancer, index) => (
        <FreelancerCard key={index}>
          <FreelancerName>{freelancer.name}</FreelancerName>
          <FreelancerImage src={freelancer.photo} alt={freelancer.name} />
          <FreelancerTechnologies>
            Tecnologias:
            {freelancer.technologies.map((t, i) => (
              <SkillItem>{t}</SkillItem>
            ))}
          </FreelancerTechnologies>
          <FreelancerRecentWork>
            Trabalho: {freelancer.recentWork}
          </FreelancerRecentWork>
          <StyledLink to={`/freelancer/${freelancer.id}`}>
            Ver detalhes do freelancer
          </StyledLink>
        </FreelancerCard>
      ))}
    </FreelancerListContainer>
  );
};

export default FreelancerList;