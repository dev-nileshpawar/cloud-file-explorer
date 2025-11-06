import './App.css';
import fileStructure from "./fileStructure.json"
import { FolderComponent } from './Folder';
function App() {
  return (
    <div>
      <FolderComponent name={fileStructure?.root.name} childs={fileStructure?.root.childs}/>
    </div>
  );
}

export default App;
