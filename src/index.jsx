import { createRoot } from 'react-dom/client';

import "./index.scss"; // indicates bundle requirement

// main component
const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            <div>Good morning</div>
        </div>
    );
};

// find app root
const container = document.querySelector('#root');
const root = createRoot(container);

// tell React to render app in root DOM element
root.render(<MyFlixApplication />);