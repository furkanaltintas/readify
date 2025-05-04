import { useEffect } from "react";

const usePageActions = () => {
  useEffect(() => {
    // Sayfa zoom engelleme
    document.documentElement.style.zoom = "100%";

    // Mouse Wheel ile zoom işlemi engelleme
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault(); // Ctrl + Mouse Wheel zoom işlemini engeller
      }
    };

    // Ctrl + "+" ve Ctrl + "-" tuşları ile zoom engelleme
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === "+" || event.key === "-")) {
        event.preventDefault(); // Ctrl + "+" veya Ctrl + "-" tuşlarına basıldığında zoom engellenir
      }
      // F12 tuşunu engelleme
      if (event.key === "F12") {
        event.preventDefault();
      }
    };

    // Sağ tıklamayı engelleme
    const handleContextMenu = (event) => event.preventDefault();

    // Linklere yönlendirmeyi engelleme
    const handleLinkClick = (event) => event.preventDefault();

    // EventListener'ları ekleme
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      // Cleanup: EventListener'ları temizleme
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
};

export default usePageActions;
