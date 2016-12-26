import React from 'react';
import { Card, CardActions, CardMedia } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import TwitterButton from './socials/react-twitter-button';
import GithubButton from './socials/react-github-button';


export default class MaterialAppExampleProgress extends React.Component {
    render() {
        return (
          <div style={{ minWidth: 400}}>
            <Card style={{ width: '100%', paddingTop: 16}} >
              <CardMedia style={{ marginTop: 16 }}>
                <LinearProgress mode="indeterminate" />
              </CardMedia>
              <CardMedia>
                <div
                  style={{
                      textAlign: 'center',
  //                    height: 100,
                      borderTop: '1px red solid',
                      borderBottom: '1px red solid',
                      borderColor: this.context.muiTheme.palette.borderColor,
                      padding: '16px 0px',
                  }}
                >
                  <span
                    style={{
                        fontVariant: 'small-caps',
                        fontWeight: 'bold',
                        color: this.context.muiTheme.palette.textColor,
                    }}
                  >
                    waiting for contributors
                  </span>
                </div>
              </CardMedia>
              <CardActions
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '16px 0px',
                }}
              >
                <a href="https://github.com/sm-react/storybook-addon-material-ui/fork" target="blank">
                  <RaisedButton label="I'm in" primary />
                </a>
                <a href="https://github.com/sm-react/storybook-addon-material-ui/subscription" target="blank">
                  <RaisedButton label="for tomorrow" secondary />
                </a>
              </CardActions>
            </Card>
          </div>
        );
    }
}

MaterialAppExampleProgress.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
