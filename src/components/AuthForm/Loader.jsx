import { Blocks } from 'react-loader-spinner';

const Loader = () => {
  return (
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{ marginTop: '200px', marginLeft: '300px' }}
        wrapperClass="blocks-wrapper"
      />
  );
};

export default Loader;
