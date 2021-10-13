import { useEffect } from 'react';
//import Header from '../components/header';
import Tyres from '../components/tyres';
export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
      <Tyres />
    </div>
  );
}
