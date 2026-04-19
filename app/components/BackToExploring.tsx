import Link from 'next/link';

export default function BackToExploring() {
  return (
    <div className="bg-white py-10 md:py-12 px-6 text-center">
      <Link
        href="/"
        className="group inline-block relative pb-1.5"
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#2e5a88] font-light inline-flex items-center gap-2">
          <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1.5">
            &larr;
          </span>
          Back to exploring
        </span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-[#2e5a88] transition-all duration-500 ease-out group-hover:w-full" />
      </Link>
    </div>
  );
}
