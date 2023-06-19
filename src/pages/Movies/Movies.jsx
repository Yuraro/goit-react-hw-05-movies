import Searchbar from "components/SearchBox/SearchBox";
import { Outlet } from "react-router-dom";

const Movies = () => {


    return (
        <>
            <Searchbar/>
            <Outlet />
        </> 
    );

};

export default Movies