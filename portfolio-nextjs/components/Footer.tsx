export default function Footer() {
  return (
    <footer className="py-10 text-center text-textFaint text-[13px] font-mono border-t border-borderSoft">
      © {new Date().getFullYear()} Nethmi Malsha — built with intent, not templates.
    </footer>
  );
}
