"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import styles from "./styling.module.css";

const StylingPage = () => {
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            {linksData.map((link: SingleLinkItem) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={cn(pathname === link.href && styles.active)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className={cn(styles.cta)}>ورود | ثبت نام </button>
      </header>
      <div className='w-full-width border center p-10 border-stone-700  mx-auto'>
        <div className='p-32 border bg-brand rounded-default border-brand'>
          HELLO
          <input
            type='text'
            className='border border-brand rounded-default px-2 mx-2 ring-none outline-none focus:border-emerald-600'
          />
        </div>
      </div>
    </>
  );
};

export default StylingPage;

type SingleLinkItem = { id: number; title: string; href: string };
const linksData: SingleLinkItem[] = [
  { id: 1, title: "HOME", href: "/styling" },
  { id: 1, title: "SSR", href: "/ssr" },
];
