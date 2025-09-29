import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ishan Sinha. All rights reserved.
        </p>
        <div className="mt-2 text-xs text-muted-foreground">
          Logos courtesy of:
          <a href="https://www.freepik.com/?_gl=1*19f7dl3*test_au*ODMzNzg4NjIuMTc1OTEyMzIzMg..*test_ga*NjI4NTY3OTA1LjE3NTkxMjMyMzE.*test_ga_523JXC6VL7*czE3NTkxMjMyMzEkbzEkZzEkdDE3NTkxMjM2MTgkajYwJGwwJGgw*fp_au*MTg1NDA3NjAyNi4xNzU5MTIzMjky*fp_ga*NjI4NTY3OTA1LjE3NTkxMjMyMzE.*fp_ga_1ZY8468CQB*czE3NTkxMjMyMzIkbzEkZzEkdDE3NTkxMjM2MTgkajYwJGwwJGgw" target="_blank" rel="noopener noreferrer" className="underline mx-1">Freepik</a>,
          <a href="https://www.flaticon.com/authors/pocike" target="_blank" rel="noopener noreferrer" className="underline mx-1">Pocike</a>,
          <a href="https://www.flaticon.com/authors/laisa-islam-ani" target="_blank" rel="noopener noreferrer" className="underline mx-1">Laisa Islam Ani</a>
        </div>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-foreground transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
