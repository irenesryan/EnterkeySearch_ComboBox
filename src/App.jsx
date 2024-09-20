import { useState } from 'react';
import './App.css';
import { ComboBox } from '@fluentui/react';

function App() {
  const comboBoxStyles = { root: { maxWidth: 300 } };
  const [selectedOption, setSelectedOption] = useState('');
  const [confirmedOption, setConfirmedOption] = useState(''); // Store only when Enter is pressed

  const options = [
    { key: '1', text: 'Option 1' },
    { key: '2', text: 'Option 2' },
    { key: '3', text: 'Option 3' },
    { key: '4', text: 'Option 4' },
  ];

  // Update the selectedOption when the user selects an option
  const handleOptionChange = (event, option) => {
    console.log('hello')
    if (option) {
      setSelectedOption(option.text); // Set selected option
    }
    console.log('Confirmed option:', selectedOption);
  };

  // Handle key press event, specifically for Enter key
  const handleKeyDown = (event) => {
    console.log('handleKeyDown function called!');
    console.log('Event:', event);
    console.log('Confirmed option:', selectedOption);
    if (event.ev.keyCode === 13 && selectedOption) { // 13 is the keyCode for Enter key
      setConfirmedOption(selectedOption); // Confirm the selected option
      console.log('Confirmed option:', selectedOption); // Log the confirmed option
    }
  };
  console.log('Rendering ComboBox component...');

  return (
    <div>
      <ComboBox
      placeholder='Search'
      label="Basic single-select ComboBox"
      options={options}
      styles={comboBoxStyles}
      onChange={handleOptionChange} // Handle option selection
      onKeyDown={handleKeyDown} // Detect and handle Enter key press
      tabIndex={0} // Ensure the ComboBox can receive focus
    />
    {/* Display the confirmed option */}
    <div style={{ marginTop: '20px' }}>
      <strong>Selected Option (confirmed by Enter):</strong> {confirmedOption || 'None'}
    </div>
    </div>
  );
}

export default App;