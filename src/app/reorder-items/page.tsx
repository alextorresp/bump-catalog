'use client';

import { useSearchParams } from 'next/navigation';

export default function ReorderItems() {
  const searchParams = useSearchParams();
 
  const type = searchParams.get('type') || 'Items';

  return (
    <section className='container z-20 bg-red-100 min-h-screen'>
      <h3 className='mb-5'>Reorder your top {type}s</h3>
    </section>
  )
};