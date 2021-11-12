import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Box } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                   {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props) {
    const { contents } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(event, newValue)
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="Login / register Tabs">
                    {contents.map((tab, i) => <Tab key={tab.label} label={tab.label} {...a11yProps(i)} />)}
                </Tabs>
            </Box>
            {contents.map((tab, i) => {
               return <TabPanel key={tab.label} value={value} index={i}>
                    {tab.content}
                </TabPanel>
            })}
        </Box>
    );
}
