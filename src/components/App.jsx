 import React from 'react'
import {ColorPicker} from "./ColorPicker/ColorPicker"
const colorPickerOptions = [
  { label: "red", color: "red"},
  { label: "green", color: "green"},
  { label: "blue", color: "blue"},
  { label: "grey", color: "grey"},
  { label: "pink", color: "pink"},
  { label: "indigo", color: "indigo"},
  { label: "orange", color: "orange"},
  { label: "lime", color: "lime"},
]
export const App = () => {
  return (
    <div className='colorPicker'>
     <h1>Состояние компонента</h1>
     <ColorPicker options={colorPickerOptions}/>
    </div>
  )
};
