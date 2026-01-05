import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-100">
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
      
    
    </div>
  );
}
