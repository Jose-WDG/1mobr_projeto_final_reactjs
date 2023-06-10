import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FreelancerController from '../controllers/FreelancerController';

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

const FreelancerDetailsComponent = () => {
  const freelancers = FreelancerController();

  const { id } = useParams();

  // Use o ID do freelancer para carregar os detalhes do freelancer correspondente

  let freelancer = freelancers.find((f) => f.id === parseInt(id || '0', 10));

  if (!freelancer) {
    return <p>Freelancer não encontrado</p>;
  }

  return (
    <>
      <FreelancerDetailsContainer>
        <FreelancerImageDetails src={freelancer.photo} alt={freelancer.name} />

        <FreelancerBio>
          <h1>{freelancer.name}</h1>
          <p>{freelancer.biography}</p>
          <ContactList contacts={freelancer.contacts} />
        </FreelancerBio>
      </FreelancerDetailsContainer>
    </>
  );
};

export default FreelancerDetailsComponent;