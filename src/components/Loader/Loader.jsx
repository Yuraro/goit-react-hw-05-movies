import { FidgetSpinner } from 'react-loader-spinner';

const Loader = () => {
    return (
    <div>
        <FidgetSpinner
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
        />
    </div>
    );
};

export default Loader;