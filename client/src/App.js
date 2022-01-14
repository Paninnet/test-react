import logo from './logo.svg';
import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Item from './components/item/Item';
import ItemList from './components/itemList/ItemList';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='search_wrapper'>
        <Input />
        <Button></Button>
      </div>
      <div className='item_wrapper'>
        {/* <Item></Item> */}
        <ItemList></ItemList>
      </div>

    </div>
  );

}

export default App;
