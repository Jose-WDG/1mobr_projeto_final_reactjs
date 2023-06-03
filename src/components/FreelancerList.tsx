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
        'Android', 'Java', 'Kotlin', 'teste', 'test', 'test'
      ],
      recentWork: 'BRQ digital solutions',
    },
    {
      id: 2,
      name: 'Felipe Araújo',
      photo: '/src/assets/foto-felipe.png',
      technologies: ['Swift', 'Dart', 'Fluter'],
      recentWork: 'Project C, Project D',
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