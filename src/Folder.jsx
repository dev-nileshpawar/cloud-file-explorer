import { Fragment } from "react/jsx-runtime"
import { FileComponent } from "./File"
import { useState } from "react"

export const FolderComponent = (props)=>{
    const [folder, updateFolder] = useState(props)
    const openCloseFolder = ()=>{
        updateFolder({...folder, isExpanded: !folder.isExpanded});
    }
    return (<div className="folder">
        <p onClick={()=>openCloseFolder()} style={{cursor:"pointer"}}>{folder.isExpanded ?"┗📂 ":"┗📁 " }{folder.name}</p>
        {(folder.isExpanded? folder.childs: []).map(({name, type, childs}, i)=>{
            return (<Fragment key={i}>
                {type === "folder"?<FolderComponent name={name} childs={childs} /> : <FileComponent name={name}/>}
            </Fragment>)
        })}
    </div>)
}