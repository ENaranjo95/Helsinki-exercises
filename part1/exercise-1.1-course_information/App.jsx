import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import data from './data';

const App = () => (
  <div>
    <Header title={data.course} />
    <Content content={data.content} />
    <Total content={data.content} />
  </div>
);

export default App