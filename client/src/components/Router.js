import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import MemberMatching from 'routes/MemberMatching';
// import LookbookTest from 'routes/LookbookJisooTest';
// import LookbookSlider from 'routes/LookbookSlider';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/jisoolookbook" component={LookbookTest} />
        <Route path="/swiper" component={LookbookSlider} /> */}
      </Switch>
      <Switch>
        <Route exact path="/member-matching" component={MemberMatching} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
