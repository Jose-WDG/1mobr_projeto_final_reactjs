import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

const FreelancerDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 12px;
  margin-top: 10px;
  background-color: var(--primary-color);
`;

const FreelancerImageDetails = styled.img`
  max-width: 100%;
  height: auto;
`;

const FreelancerBio = styled.p`
  margin-left: 20px;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;

  h1 {
    color: var(--primary-text-color);
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;

const FreelancerDetails = () => {
  const freelancers = [
    {
      id: 1,
      name: 'José Ramalho',
      photo: '/src/assets/foto-jose.jpg',
      technologies: [
        'Android', 'Java', 'Kotlin', 'teste', 'test', 'test'
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
    },
    {
      id: 2,
      name: 'Felipe Araújo',
      photo: '/src/assets/foto-felipe.png',
      technologies: ['Swift', 'Dart', 'Fluter'],
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
      recentWork: 'Project C, Project D',
    },
    // Add more freelancers as needed
  ];

  const { id } = useParams();

  // Use o ID do freelancer para carregar os detalhes do freelancer correspondente
  let freelancer = freelancers.find((f) => f.id === parseInt(id, 10));

  if (!freelancer) {
    return <p>Freelancer não encontrado</p>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <FreelancerDetailsContainer>
          <FreelancerImageDetails src={freelancer.photo} alt={freelancer.name} />

          <FreelancerBio>
            <h1>{freelancer.name}</h1>
            <p>{freelancer.biography}</p>
          </FreelancerBio>
        </FreelancerDetailsContainer>
      </Container>
    </>
  );
};

export default FreelancerDetails;