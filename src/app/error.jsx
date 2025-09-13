'use client';

export default function Error({ error, reset }) {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
      <p>{error?.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
