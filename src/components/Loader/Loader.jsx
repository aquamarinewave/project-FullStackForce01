import { Blocks } from 'react-loader-spinner';

const Loader = () => {
  return (
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{ marginTop: '20%', marginLeft: '45%' }}
        wrapperClass="blocks-wrapper"
      />
  );
};

export default Loader;
