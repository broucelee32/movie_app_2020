import React from 'react';
import './App.css';

function Test () {
  return <h2>Test Component Titlel</h2>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <div className="test">
        <div className="left">
          <table>
            <tr>
              <td>
                1212
              </td>
            </tr>

          </table>
        </div>
        <div className="right">
          <table>
              <tr>
                <th>블라블라</th>
              </tr>       
          </table>
        </div>
      </div>
    </div>          
  ) 
}

export default App;
