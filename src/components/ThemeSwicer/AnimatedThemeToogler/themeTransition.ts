export const runThemeTransition = (button: HTMLButtonElement) => {
    const {top, left, width, height} = button.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
        {
            clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRad}px at ${x}px ${y}px)`,
            ],
        },
        {
            duration: 700,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
        }
    );
};
