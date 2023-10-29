import React, { Component } from 'react'
import styles from './ColorPicker.module.css'
export class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
        arrayChoiseColorPicker: [],
    }
     setActiveIdx = index => {
        this.setState({ activeOptionIdx: index });
      
      //   this.setState(prevState => ({
      //     contacts: [{ ...index }, ...prevState.arrayChoiseColorPicker],
      //   }));
      // };
     }
    makeOptionClassName = index => {
        return index === this.state.activeOptionIdx
            ? styles.activeOption
            : styles.option;
        }
       
  render() {
    const {activeOptionIdx} = this.state;
    const {options} = this.props;
    const {label} = options[activeOptionIdx];
    const {color} = options[activeOptionIdx];
    return (
      <div>
      <div className={styles.container}>
      <h2 className={styles.title}>ColorPicker-Class</h2>
      <p>Выбран цвет: <span className={styles.span} style={{ color: color }}>{label}</span> </p>
      
      <div>
      {options.map(({ label, color }, index)=>(
        
            <button 
            key={label}
            aria-label={label}
            className={this.makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick = {()=> this.setActiveIdx(index)}
            ></button>
        ))}
      </div>
      </div>
      <div className={styles.container}>
      <button 
            key={label}
            aria-label={label}
            className={styles.option}
            style={{ backgroundColor: color }}
            ></button>
      </div>
      </div>

     
    )
  }
}
