import React from 'react';
import BaseComponet from './BaseComponent';
import themeable from 'react-themeable';

export default class Panel extends BaseComponent {
  static displayName = 'Panel';

  render() {
    const theme = themeable(this._mixTheme());

    return (
      <div {theme(1, 'panel')}>
        {this.props.children}
      </div>
    );
  }
}
