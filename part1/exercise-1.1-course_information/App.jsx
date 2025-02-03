import Header from '../components/Header';
import Content from '../components/Content';
import Total from '../components/Total';

import data from './data';

const App = () => (
  <div>
    <Header name={data.name} />
    <Content parts={data.parts} />
    <Total parts={data.parts} />
  </div>
);

export default App