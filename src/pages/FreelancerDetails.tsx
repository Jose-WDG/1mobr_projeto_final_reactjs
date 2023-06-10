import ContainerComponent from '../components/ContainerComponent';
import NavbarComponen from '../components/NavbarComponent';
import FreelancerDetailsComponent from '../components/FreelancerDetailsComponent';

const FreelancerDetails = () => {
  return (
    <>
      <NavbarComponen />
      <ContainerComponent>
        <FreelancerDetailsComponent />
      </ContainerComponent>
    </>
  );
};

export default FreelancerDetails;


