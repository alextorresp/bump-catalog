export default function MyCatelogSkeleton({ title }: { title: string }) {
  return (
    <div className='animate-pulse'>
      <h4 className='mb-3 text-lg bg-gray-300 w-1/3 h-6 rounded'></h4>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className='bg-gray-300 h-32 rounded'></div>
        ))}
      </div>
    </div>
  );
}