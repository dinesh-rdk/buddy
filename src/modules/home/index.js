import React, { Fragment, PureComponent } from 'react';
import { withTranslation } from 'react-i18next';

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <h1>{this.props.t('welcomeMessage')}</h1>
      </Fragment>
    );
  }
}

export default withTranslation()(Home);
