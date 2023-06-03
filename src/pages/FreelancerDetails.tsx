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

const ContactListContainer = styled.div`
  margin-top: 20px;

  h2 {
    color: var(--primary-text-color);
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 5px;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const ContactList = ({ contacts }) => {
  return (
    <ContactListContainer>
      <h2>Contatos</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              {contact.name}
            </a>
          </li>
        ))}
      </ul>
    </ContactListContainer>
  );
};

const FreelancerDetails = () => {
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
            <ContactList contacts={freelancer.contacts} />
          </FreelancerBio>
        </FreelancerDetailsContainer>
      </Container>
    </>
  );
};

export default FreelancerDetails;