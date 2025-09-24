import { useState } from "react";

export default function Arraypush() {
  let nexId = 6;
  function handleDelete(id) {
    const newDevices1 = [...devices];
    let index = 0;
    let selectIndex = 0;
    for (let device of newDevices1) {
      if (device.id == id) {
        selectIndex = index;
      }
      index = index + 1;
    }
    newDevices1.splice(selectIndex, 1);
    setDevices(newDevices1);
  }
  const [devices, setDevices] = useState([
    { id: 1, name: "app" },
    { id: 2, name: "web" },
    { id: 3, name: "terminal" },
    { id: 4, name: "dev" },
    { id: 5, name: "production" },
  ]);
  const deviceMap = devices.map((dev) => {
    return (
      <li key={dev.id}>
        {dev.name}{" "}
        <button
          onClick={() => {
            handleDelete(dev.id);
          }}
        >
          delete
        </button>
      </li>
    );
  });
  const [deviceName, setDeviceName] = useState("");
  return (
    <>
      {deviceMap}
      <input
        value={deviceName}
        onChange={(event) => {
          setDeviceName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          //   const newDevice = [...devices];
          //   newDevice.push(deviceName);
          //   setDevices(newDevice);
          setDevices([...devices, { id: nexId, name: deviceName }]);
          nexId = nexId + 1;
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          const newDevices1 = [...devices];
          newDevices1.pop();
          setDevices(newDevices1);
        }}
      >
        pop array
      </button>
    </>
  );
}
