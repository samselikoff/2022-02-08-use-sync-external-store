import { useState, useSyncExternalStore } from "react";

export default function App() {
  let [showing, setShowing] = useState(true);

  return (
    <>
      <button onClick={() => setShowing(!showing)}>toggle</button>
      {showing && <Component />}
      <Component />
    </>
  );
}

let now = new Date().toLocaleTimeString();
setInterval(() => {
  now = new Date().toLocaleTimeString();
  notifiers.forEach((notify) => notify());
}, 1000);

let notifiers = new Set();
function subscribe(notify) {
  notifiers.add(notify);

  return () => notifiers.delete(notify);
}

function Component() {
  let store = useSyncExternalStore(subscribe, () => now);

  return <p>The time is: {store}</p>;
}
