import { Provider } from "react-redux";
import store from "./store";
import CryptoTable from "./components/CryptoTable";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Crypto Price Tracker
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg shadow bg-white dark:bg-gray-800 overflow-hidden">
                <CryptoTable />
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Real-time crypto data (simulated) • Updated every few seconds
            </p>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
