import { Blocks } from 'react-loader-spinner';

const Loader = ({ props }) => {
  return (
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={props}
      wrapperClass="blocks-wrapper"
    />
  );
};

export default Loader;
