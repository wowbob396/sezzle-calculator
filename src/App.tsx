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

  }

  async function calculate() {

  }
  
  return (
    <div className={styles.formStyle}>
      <h1>Calculator</h1>
      <TextField onChange={onCalculationChange}>

      </TextField>
    </div>
  );
}

export default withAuthenticator(App);
