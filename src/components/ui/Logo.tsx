import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-105">
        <Image 
          src="/logo-vc.png" 
          alt="Logo Dr. Vitor de Castro"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="font-serif text-lg leading-tight text-brand-dark">
        Dr. Vitor <br /> 
        <span className="text-brand-gold italic font-light text-sm tracking-wide">de Castro</span>
      </div>
    </Link>
  );
}