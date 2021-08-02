import React from "react";
import Select, { Option } from "rc-select";
import ReactDOM, { render } from "react-dom";

import './index.css';

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i} disabled={i === 10}>
      label{i}
    </Option>
  );
}

class Test extends React.Component {
  state = {
    useAnim: 0,
    value: ["a10"]
  };

  onChange = (value, options) => {
    console.log("onChange", value, options);
    this.setState({
      value
    });
  };

  onSelect = (...args) => {
    console.log(args);
  };

  onDeselect = (...args) => {
    console.log(args);
  };

  useAnim = e => {
    this.setState({
      useAnim: e.target.checked
    });
  };

  render() {
    const dropdownMenuStyle = {
      maxHeight: 200
    };
    return (
      <div>
        <h2>multiple select（scroll the menu）</h2>

        <p>
          <label>
            anim
            <input
              checked={this.state.useAnim}
              type="checkbox"
              onChange={this.useAnim}
            />
          </label>
        </p>

        <div style={{ width: 300 }}>
          <Select
            className='rc-select'
            value={this.state.value}
            animation={this.state.useAnim ? "slide-up" : null}
            choiceTransitionName="rc-select-selection__choice-zoom"
            dropdownMenuStyle={dropdownMenuStyle}
            style={{ width: 500 }}
            multiple
            allowClear
            optionFilterProp="children"
            optionLabelProp="children"
            onSelect={this.onSelect}
            onDeselect={this.onDeselect}
            placeholder="please select"
            onChange={this.onChange}
            onFocus={() => console.log("focus")}
            
          >
            {children}
          </Select>
        </div>
      </div>
    );
  }
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

const App = () => (
  <div style={styles}>
    <Test />
  </div>
);

render(<App />, document.getElementById("root"));
