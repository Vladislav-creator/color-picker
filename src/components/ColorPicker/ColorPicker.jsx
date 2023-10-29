import React, { Component } from 'react';
import styles from './ColorPicker.module.css';
export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
    arrayChoiseColorPicker: [],
  };
  componentDidMount() {
    const arrayChoiseColorPicker = localStorage.getItem('arrayChoiseColorPicker');
    const parsedColorPicker = JSON.parse(arrayChoiseColorPicker);

    if (parsedColorPicker) {
      this.setState({ arrayChoiseColorPicker: parsedColorPicker });
    }
  }

  componentDidUpdate(prevState) {
    const { arrayChoiseColorPicker } = this.state;

    if (arrayChoiseColorPicker !== prevState.arrayChoiseColorPicker) {
      console.log('arrayChoiseColorPicker were updated');
      localStorage.setItem('arrayChoiseColorPicker', JSON.stringify(arrayChoiseColorPicker));
    }
  }






  getArrayWithIniqValue = arrayNumbers => [...new Set(arrayNumbers)];

  setActiveIdx = index => {
    this.setState(prevState => {
      return {
        activeOptionIdx: index,
        arrayChoiseColorPicker: [
          ...this.getArrayWithIniqValue([
            ...prevState.arrayChoiseColorPicker,
            index,
          ]),
        ],
      };
    });
  };

  setDelIdx = index => {
    const filteredColorPicker = this.state.arrayChoiseColorPicker.filter(
      el => el !== index
    );
    this.setState(prevState => {
      return { ...prevState, arrayChoiseColorPicker: [...filteredColorPicker] };
    });
  };
  
      
  makeOptionClassName = index => {
    return index === this.state.activeOptionIdx
      ? styles.activeOption
      : styles.option;
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    const { color } = options[activeOptionIdx];
    return (
      <div>
        <div className={styles.container}>
          <h2 className={styles.title}>ColorPicker-Class</h2>
          <p>
            Выбран цвет:{' '}
            <span className={styles.span} style={{ color: color }}>
              {label}
            </span>{' '}
          </p>

          <div>
            {options.map(({ label, color }, index) => (
              <button
                key={label}
                aria-label={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Choise ColorPicker</h2>
        <div className={styles.container1}>
          {this.state.arrayChoiseColorPicker.map(( index) => (
            <button
              key={options[index].label}
              aria-label={options[index].label}
              className={styles.option}
              style={{ backgroundColor: options[index].color }}
              onClick={() => this.setDelIdx(index)}
            ></button>
          ))}
        </div>
      </div>
      </div>
    );
  }
}