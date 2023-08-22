import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome',
  description: 'Garden Shop and Feed Depot',
  keywords: 'Agriculture, Farming, STIHL, Chainsaw, ',
};

export default Meta;