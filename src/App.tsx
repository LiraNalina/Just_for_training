import React from 'react';
import { Sbor } from './Components/Sbor/Sbor';
import state, { addTest, AllTypes, removeTest } from './redux/state';


const App = () => {

    return (
        <div>
            <Sbor
                addTestCallback={addTest}
                todoPage={{
                    tasks: [],
                    addTest: () => { },
                    removeTest: () => { }
                }}
                countPage={{
                    nums: []
                }}
                addTest={addTest}
                removeTestCallback={removeTest} 
                removeTest={removeTest}               />

        </div>
    )
}
export default App
