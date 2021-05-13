import {useEffect} from "react";

let renderCount = 0
function Child() {
    useEffect(() => {
        renderCount += 1;
    })

    return <div>RenderCount: {renderCount}</div>
}

export default Child