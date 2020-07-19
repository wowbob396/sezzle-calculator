import React, { useState, ChangeEvent } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { 

  makeStyles, 
  createStyles, 
  Theme, 
  TextField,
  Button
} from "@material-ui/core";
Amplify.configure(awsExports); 

const useStyles = makeStyles((theme: Theme) => createStyles({
  formStyle: {
    margin: theme.spacing(3),
    display: "inline-block",
  }
}));



function App() {
  const styles = useStyles();
  const [calculation, setCalculation] = useState('');

  function onCalculationChange(event: ChangeEvent<HTMLInputElement>) {
    const newCalculation = event.target.value;
    console.log(newCalculation);
    setCalculation(newCalculation);
  }

  function calculate() {
    console.log(calculation);
    try {
      const result = eval(calculation);
      console.log(result);
    } catch (error) {
      console.log(error);
      if (error instanceof SyntaxError) {
        alert('Sorry, the equation you entered has a syntax error.');
      }
    }
    setCalculation('');
  }
  
  return (
    <div className={styles.formStyle}>
      <h1>Calculator</h1>
      <div className={styles.formStyle}>

      <TextField label="Enter Calculation Here!" onChange={onCalculationChange} value={calculation}>

      </TextField>

      <Button onClick={calculate}>Submit Calculation</Button>
      </div>
      <h2> Calculation Feed</h2>
      <div>
        
      </div>
    </div>
  );
}

export default withAuthenticator(App);
