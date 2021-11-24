import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllSports } from 'src/store/actions/SportActions';
import { Box, CustomRow, Input } from "./styles";



const SearchBar = () => {
    const [searchTitle, setSearchTitle] = useState(``);
    const dispatch = useDispatch();

    const onChangeSearchTitle = (e: any) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const findByTitle = () => {
        dispatch(getAllSports(searchTitle));
    };

    return (
        <CustomRow >
            <Box>
                <Input
                    type='text'
                    className='form-control'
                    placeholder='Search by title'
                    value={ searchTitle }
                    onChange={ onChangeSearchTitle }
                />
                <button
                    className='btn btn-outline-secondary'
                    type='button'
                    onClick={ findByTitle }
                >
                    Search
                </button>
            </Box>
        </CustomRow>
        // <form onSubmit={findByTitle}>
        //   <input
        //     value={searchTitle}
        //     type='text'
        //     placeholder='Search for a club ...'
        //     name='query'
        //     onChange={(e) => setSearchTitle(e.target.value)}
        //   />
        // </form>
    )
}

export default SearchBar
