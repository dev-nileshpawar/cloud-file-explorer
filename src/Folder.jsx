import { Fragment, useState } from "react";
import { FileComponent } from "./File"

export const FolderComponent = ({childs, name})=>{
    const [expand, updateExpansion] = useState(false)
    const openCloseFolder = ()=>{
        updateExpansion(!expand);
    }
    return (<div className="folder">
        <p onClick={()=>openCloseFolder()} style={{cursor:"pointer"}}>{expand ?"┗📂 ":"┗📁 " }{name}</p>
        {(expand? childs: []).map(({name, type, childs, expand}, i)=>{
            return (<Fragment key={name}>
                {type === "folder"?<FolderComponent name={name} childs={childs} /> : <FileComponent name={name}/>}
            </Fragment>)
        })}
    </div>)
}
