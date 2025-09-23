import { useState } from "react";
export default function Arraypush() {
  const [devices, setDevices] = useState([
    "linux",
    "samsung",
    "apple",
    "mac",
    "nokia",
  ]);
  const deviceMap = devices.map((dev) => {
    return <li>{dev}</li>;
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
          setDevices([...devices, deviceName]);
        }}
      >
        add
      </button>
    </>
  );
}
