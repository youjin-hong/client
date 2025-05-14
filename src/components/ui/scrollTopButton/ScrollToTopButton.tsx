export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-16 right-12 w-12 h-12 p-3 rounded-full bg-pointColor text-white shadow-custom hover:bg-[#718d79] transition">
      ↑
    </button>
  );
}
