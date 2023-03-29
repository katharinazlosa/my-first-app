import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Page = () => {
    return (
        <div className="page-container">
            <Stack spacing={2}>
                <Pagination count={10} showFirstButton showLastButton />
                <Pagination count={10} hidePrevButton hideNextButton />
            </Stack>
        </div>
        
    );
}

export default Page;