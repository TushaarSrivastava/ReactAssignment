import React from 'react'
import Header from '../common/header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './details/Details';
import Homepage from './homepage/Homepage';
import BookShow from './bookshow/BookShow';
import Confirmation from './confirmation/Confirmation';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createTheme({
    gap: {
      unit: 8,
    },
  });
theme = responsiveFontSizes(theme);

function Controller() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <div>
                    <Header />
                    <main>
                        <Switch>
                            <Route exact path="/movie/:id" component={MovieDetails} />
                            <Route exact path="/bookmovie/:id" component={(args) => <BookShow {...args} baseUrl="http://localhost:8085/api/v1/" />} />
                            <Route exact path="/confirm/:id" component={(args) => <Confirmation {...args} baseUrl="http://localhost:8085/api/v1/" />} />
                            <Route exact path="/" component={Homepage} />
                            <Route path="*">Page not found</Route>
                        </Switch>
                    </main>
                </div>
            </ThemeProvider>
        </Router>
    )
}

export default Controller
