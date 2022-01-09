import React from 'react';
import { labels } from './constants';

const Spinner = props => {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: labels.defaultLoading,
};

export default Spinner;