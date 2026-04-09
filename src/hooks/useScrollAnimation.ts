import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   Single element: adds "animate-in" when the
   element itself enters the viewport.
───────────────────────────────────────────── */
export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return ref;
};

/* ─────────────────────────────────────────────
   Children stagger: observes every .scroll-item
   inside the container and auto-sets --delay for
   a cascading entrance if not already provided.
───────────────────────────────────────────── */
export const useScrollAnimationChildren = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" },
    );

    if (ref.current) {
      const children = ref.current.querySelectorAll(".scroll-item");
      children.forEach((child, index) => {
        const el = child as HTMLElement;
        // Auto stagger: set --delay only if not manually provided
        if (!el.style.getPropertyValue("--delay")) {
          el.style.setProperty("--delay", `${index * 0.07}s`);
        }
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

/* ─────────────────────────────────────────────
   Dependency-aware children: re-runs when the
   dependency changes (e.g. after async data load).
   Adds "show" class so .scroll-item.show triggers.
───────────────────────────────────────────── */
export const useScrollAnimationChildrenCatalago = (dependency?: unknown) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".scroll-item");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((item, index) => {
      const el = item as HTMLElement;
      if (!el.style.getPropertyValue("--delay")) {
        el.style.setProperty("--delay", `${(index % 10) * 0.05}s`);
      }
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [dependency]);

  return containerRef;
};
