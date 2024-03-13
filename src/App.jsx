import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    file: null,
    startTime: 0,
    endTime: 0,
    drums: false,
    bass: false,
    vocals: false,
  });

  const [downloadReady, setDownloadReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloadLinks, setDownloadLinks] = useState({
    drums: "",
    bass: "",
    vocals: "",
  });
  return (
    <div className="h-screen flex bg-gray-100 flex-col">
      <nav className="bg-white shadow-lg flex items-center justify-between px-4 py-2 flex-col">
        <h2 className="text-2xl font-bold">Harmonic Harmony</h2>
        <h4 className="text-xl font-semibold">Music Source Separation Tool</h4>
      </nav>
      <div className="flex">
        <div className="flex flex-col w-1/4 p-4 gap-2">
          <h3 className="text-xl font-semibold">Upload Audio</h3>
          <input type="file" className="border-2 border-gray-300 p-2 mt-2" />
          <h3 className="text-xl">Enter the start and end time of the audio</h3>
          <input
            type="number"
            className="border-2 border-gray-300 p-2 mt-2"
            placeholder="start time"
          />
          <input
            type="number"
            className="border-2 border-gray-300 p-2 mt-2"
            placeholder="end time"
          />
          <h3 className="text-xl">Select what you want to separate</h3>
          <div className="flex">
            <input type="checkbox" className="w-1/2" />
            <label className="w-1/2">Drums</label>
          </div>
          <div className="flex">
            <input type="checkbox" className="w-1/2" />
            <label className="w-1/2">Bass</label>
          </div>
          <div className="flex">
            <input type="checkbox" className="w-1/2" />
            <label className="w-1/2">Vocals</label>
          </div>
          <button
            className="bg-blue-500 text-white p-2 mt-2"
            onClick={() => {
              console.log("Upload button clicked");
            }}
          >
            Upload
          </button>
        </div>
        <div className="w-2/4 flex flex-col">
          {downloadReady ? (
            <div className="flex flex-col items-center">
              <h3 className="text-xl">Download your separated audio</h3>
              downloadLinks.drums && (
              <a
                href={downloadLinks.drums}
                download="drums.mp3"
                className="bg-blue-500 text-white p-2 mt-2"
              >
                Drums
              </a>
              ) downloadLinks.bass && (
              <a
                href={downloadLinks.bass}
                download="bass.mp3"
                className="bg-blue-500 text-white p-2 mt-2"
              >
                Bass
              </a>
              ) downloadLinks.vocals && (
              <a
                href={downloadLinks.vocals}
                download="vocals.mp3"
                className="bg-blue-500 text-white p-2 mt-2"
              >
                Vocals
              </a>
              )
            </div>
          ) : loading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl">
                Your separated audio will be ready soon
              </h3>
              <img
                src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                alt="loading"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl">
                Please upload an audio file to get started
              </h3>
            </div>
          )}
        </div>
        <div className="w-1/4 flex flex-col p-4 gap-2">
          <h3 className="text-xl font-semibold">How to use</h3>
          <p>
            1. Upload an audio file using the &quot;Upload Audio&quot; section on the left
          </p>
          <p>
            2. Enter the start and end time of the audio you want to separate
          </p>
          <p>
            3. Select what you want to separate using the checkboxes provided
          </p>
            <p>4. Click on the &quot;Upload&quot; button to start the process</p>
          <p>
            5. Once the process is complete, you can download the separated
            audio
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
