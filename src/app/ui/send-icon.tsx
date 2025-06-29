export default function SendIconComponent() {
  return (
    <svg
      className="h-8 w-8 hover:text-blue-500 dark:text-white cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <line x1="10" y1="14" x2="21" y2="3" />{" "}
      <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
    </svg>
  );
}
