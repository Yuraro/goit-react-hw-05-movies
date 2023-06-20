import { FidgetSpinner } from 'react-loader-spinner';
import { LoaderWrap} from './Loader.styled';

const Loader = () => {
    return (
    <LoaderWrap>
        <FidgetSpinner
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
        />
    </LoaderWrap>
    );
};

export default Loader;