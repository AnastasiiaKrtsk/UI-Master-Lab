import { ContextApp } from '../components/react-hooks-tutor/context/ContextApp';

function App() {
  return (
    <div className="min-h-screen bg-blue-950 text-violet-100 flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        <ContextApp />
      </div>
    </div>
  );
}

export default App;
