  import React, {Component} from 'react';
  import PropTypes from 'prop-types';
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardHeader from '@material-ui/core/CardHeader';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';
  import { withRouter } from 'react-router-dom';

  import { CCTV } from '../constants/routes';

  class FeedCard extends Component {
    componentDidMount() {
      this.rawr.playbackRate = 0.1;
    }
    render() {
      const { history, index } = this.props;
      const src = `/rick${index}.mp4`;
      return (
          <Card>
            <div style={{fontFamily:'waukegan'}}>            
              <CardHeader
                title={this.props.feedItem.name} onClick={()=>history.push({ pathname: CCTV+'/'+this.props.feedItem.id, state: { src: src } })}
              />
            </div>
            <video ref={(me) => this.rawr = me} controls={false} autoPlay muted loop width='100%'>
              <source src={src} type="video/mp4"/>
            </video>
            <CardContent>
              <Typography component="p">
                {this.props.feedItem.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>history.push({ pathname: CCTV+'/'+this.props.feedItem.id, state: { src: src } } )}>
                View
              </Button>
            </CardActions>
          </Card>
      );
    }
  }

  FeedCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withRouter(FeedCard);
