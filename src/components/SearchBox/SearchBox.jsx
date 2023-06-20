import { notification } from 'components/Norification/Notification';
import { useState } from 'react';
import { FcFilmReel } from 'react-icons/fc';
import {
    Form,
    FormButton,
    FormInput,
    Wrap,
} from './SearchBox.styled';

const Searchbar = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value === '') {
            notification('The search input cannot be empty. Please enter a search query');
            return;
        }

        onSubmit(value.trim().toLowerCase());
        setValue('');
    };


    return (
        <Wrap>
            <Form type="submit" onSubmit={handleSubmit}>
                <FormButton>
                    <FcFilmReel size="30" />
                </FormButton>

                <FormInput
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={value}
                />
            </Form>
        </Wrap>
    );
};

export default Searchbar;