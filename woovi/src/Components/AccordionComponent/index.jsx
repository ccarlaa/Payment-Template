import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = ({label= "label", text="texto"}) => {
    return (
        <Accordion 
            className='w-full' 
            sx={{ 
                '&:before': {
                    display: 'none',
                },
                boxShadow: 'none',
                border: 'none',
            }}> 
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{padding: 0}}
                >
                <p className='text-gray-400 font-extrabold text-sm'>{label}</p>
            </AccordionSummary>
            <AccordionDetails>
                <p className='text-gray-400 font-normal text-sm'>{text}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent