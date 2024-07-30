import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './exampleSlice';
import { fetchExampleData } from './exampleThunks';
import { AppDispatch, RootState } from '../store/store';

const ExampleComponent: React.FC = () => {
  const value = useSelector((state: RootState) => state.example.value);
  const dispatch: AppDispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(fetchExampleData());
  };

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={handleFetchData}>Fetch Data</button>
    </div>
  );
};

export default ExampleComponent;
