import Link from 'next/link';

export default function BackToExploring() {
  return (
    <div className="bg-white py-10 md:py-12 px-6 text-center">
      <Link
        href="/"
        aria-label="Back to home"
        className="group inline-flex items-center justify-center w-10 h-10 text-[#2e5a88]/60 hover:text-[#2e5a88] transition-colors"
      >
        <span className="text-[20px] leading-none inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1.5">
          &larr;
        </span>
      </Link>
    </div>
  );
}
