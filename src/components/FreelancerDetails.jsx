import { useParams } from 'react-router-dom';

const FreelancerDetails = () => {
  const { id } = useParams();

  // Use o ID do freelancer para carregar os detalhes do freelancer correspondente

  return (
    // Renderize os detalhes do freelancer
    <>{id}</>
  );
};

export default FreelancerDetails;