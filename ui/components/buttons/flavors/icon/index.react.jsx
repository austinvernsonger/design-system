/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

class Component extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    const className = this.$getClassNameWithFlavor('button');
    const iconClassName = this.$getClassNameWithFlavor('button__icon', {
      prop: 'iconFlavor',
      includeClassName: false
    });
    const {sprite,symbol} = this.props;
    const props = this.$propsWithoutKeys('className', 'sprite', 'symbol');
    return (
        <button className={pf(className)} {...props}>
          <SvgIcon className={pf(iconClassName)} sprite={sprite} symbol={symbol} />
          {this.renderAssistiveText()}
        </button>
    );
  }
  renderAssistiveText() {
    if (!this.props.assistiveText) return null;
    return (
      <span className={pf('assistive-text')}>{this.props.assistiveText}</span>
    );
  }
}

Component.displayName = 'ButtonIcon';
Component.propTypes = {
  flavor: componentUtil.PropTypes.flavor(
    'icon-container', 'icon-border', 'icon-small',
    'icon-bare', 'icon-inverse', 'icon-x-small',
    'icon-border-filled', 'icon-inverse'
  ),
  iconFlavor: componentUtil.PropTypes.flavor(
    'inverse', 'hint', 'small', 'x-small', 'large'
  ),
  sprite: React.PropTypes.string.isRequired,
  symbol: React.PropTypes.string.isRequired,
  assistiveText: React.PropTypes.string
};

module.exports = Component;
