import { createRoot } from "react-dom/client";

import { MainView } from "./components/MainView/MainView";

import "./index.scss"; // indicates bundle requirement

// main component
const MyFlixApplication = () => {
    return <MainView />;
};

// find app root
const container = document.querySelector('#root');
const root = createRoot(container);

// tell React to render app in root DOM element
root.render(<MyFlixApplication />);