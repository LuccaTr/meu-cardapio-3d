export default function AllergenBadge({ label }) {
  return (
    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] px-2 py-0.5 rounded-md font-semibold">
      {label}
    </span>
  );
}