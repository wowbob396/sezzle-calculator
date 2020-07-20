import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import './App.css';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import * as subscriptions from './graphql/subscriptions';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
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

interface UserCalculations {id: string; username: string; timestamp: string; calculation: string; updatedAt: string}



function App() {
  const styles = useStyles();
  const [calculation, setCalculation] = useState('');
  const [allCalculations, setAllCalculations] = useState<Array<UserCalculations>>([]);
  const [username, setUsername] = useState('');
  const refreshList = async () => {
    const result = await API.graphql(graphqlOperation(queries.listUserCalculations), {variables: 'limit 10'}) as any;
    console.log(result);
    const finalList: Array<UserCalculations> = result.data.listUserCalculations.items;
    finalList.sort((a: UserCalculations, b: UserCalculations) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
    
    setAllCalculations(finalList.slice(0,10));
  }
  const getSubscriptions = useCallback(async () => {
    const userData = await Auth.currentAuthenticatedUser();

    const username = userData.username;
    const updatedSubscriptions = API.graphql(graphqlOperation(subscriptions.userCalculationCreated)) as any;
    setUsername(username);
    const updatedSubs: Array<{id: string; username: string; timestamp: string; calculation: string; updatedAt: string}> = [];

    
    await updatedSubscriptions.subscribe({
      next: refreshList
    });

    console.log(updatedSubs);

  }, [setUsername]);


  useEffect(() => {
    getSubscriptions();
    refreshList();
  }, [username]);

  function onCalculationChange(event: ChangeEvent<HTMLInputElement>) {
    const newCalculation = event.target.value;
    console.log(newCalculation);
    setCalculation(newCalculation);
  }

  async function calculate() {
    console.log(calculation);
    try {
      let result = eval(calculation);
      result = calculation + ` = ${result}`;
      console.log(result);

      await API.graphql(graphqlOperation(mutations.createUserCalculation,{input: {
        username,
        calculation: result,
        timestamp: new Date().toDateString()
      }}));

      refreshList();
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
      <h2>Hello {username ? `,${username}!` : ''}</h2>
      <TextField label="Enter Calculation Here!" onChange={onCalculationChange} value={calculation}>

      </TextField>

      <Button onClick={calculate}>Submit Calculation</Button>
      </div>
      <h2> Calculation Feed</h2>
      <ul>
        {allCalculations.map((value: UserCalculations, index: number) => {
          return <li key={index}>{`${value.username} calculated: ${value.calculation} on ${value.timestamp}`}</li>
        })}
      </ul>
    </div>
  );
}

export default withAuthenticator(App);
